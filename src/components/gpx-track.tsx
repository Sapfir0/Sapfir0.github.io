import { useEffect, useState } from 'react';
import { CircleMarker, Polyline, useMap } from 'react-leaflet';
import { loadGpx, type GpxTrack as TGpxTrackData } from '../lib/gpx.ts';
import type { TGpxData } from '../lib/types.ts';

const COLORS = ['blue', 'red', 'purple', 'green', 'black'];

/** Stable color per track url, so the palette never changes between renders. */
function colorFor(url: string): string {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = (hash * 31 + url.charCodeAt(i)) | 0;
  }
  return COLORS[Math.abs(hash) % COLORS.length] ?? 'blue';
}

function useGpx(url: string) {
  // The url is stored together with the track, so a stale track from a
  // previous url is never shown while the new one loads.
  const [state, setState] = useState<{ url: string; track: TGpxTrackData | null }>({ url, track: null });

  useEffect(() => {
    let cancelled = false;

    loadGpx(url)
      .then((loaded) => {
        if (!cancelled) {
          setState({ url, track: loaded });
        }
      })
      .catch((error: unknown) => {
        console.warn(`Failed to load GPX track ${url}:`, error);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return state.url === url ? state.track : null;
}

type GpxTrackProps = {
  url: string;
  color?: string;
  /** Fits the map to this track's bounds once it loads (for single-track maps). */
  fitToTrack?: boolean;
  onLoad?: (data: TGpxData) => void;
};

export function GpxTrack({ url, color, fitToTrack = false, onLoad }: GpxTrackProps) {
  const map = useMap();
  const track = useGpx(url);
  const lineColor = color ?? colorFor(url);

  useEffect(() => {
    if (!track) {
      return;
    }

    onLoad?.(track.stats);

    // Pass raw points (not an L.LatLngBounds instance) so the map's own
    // Leaflet instance always interprets them correctly.
    if (fitToTrack && track.lines.length > 0) {
      map.fitBounds(track.lines.flat(), { padding: [40, 40] });
    }
  }, [track, fitToTrack, map, onLoad]);

  if (!track) {
    return null;
  }

  return (
    <>
      {track.lines.map((line, index) => (
        <Polyline key={index} positions={line} pathOptions={{ color: lineColor, weight: 4, opacity: 0.8 }} />
      ))}
      {track.start && (
        <CircleMarker
          center={track.start}
          radius={5}
          pathOptions={{ color: 'green', fillColor: 'green', fillOpacity: 1 }}
        />
      )}
      {track.end && (
        <CircleMarker center={track.end} radius={5} pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 1 }} />
      )}
    </>
  );
}

type GpxTracksProps = {
  /** The parent must memoize this array, otherwise the tracks would re-fit on every render. */
  urls: string[];
  /** While false, the tracks are neither loaded nor rendered. */
  active?: boolean;
};

/**
 * Renders several tracks at once and fits the map to the combined bounds of
 * all of them (instead of the last-loaded one, which leaflet-gpx used to do).
 */
export function GpxTracks({ urls, active = true }: GpxTracksProps) {
  const map = useMap();

  useEffect(() => {
    if (!active || urls.length === 0) {
      return;
    }

    let cancelled = false;

    Promise.all(urls.map((url) => loadGpx(url).catch(() => null))).then((tracks) => {
      if (cancelled) {
        return;
      }

      const points: [number, number][] = [];
      for (const track of tracks) {
        if (track) {
          points.push(...track.lines.flat());
        }
      }

      if (points.length > 0) {
        map.fitBounds(points, { padding: [40, 40] });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [urls, active, map]);

  if (!active) {
    return null;
  }

  return (
    <>
      {urls.map((url) => (
        <GpxTrack key={url} url={url} />
      ))}
    </>
  );
}
