import { parseGPX, type GeoJSON } from '@we-gold/gpxjs';
import type { TGpxData } from './types.ts';

/** [lng, lat, elevation?] — GeoJSON coordinate order. */
export type GpxCoordinate = [number, number, number?];

/** [lat, lng] — Leaflet position order. */
export type GpxPosition = [number, number];

export type GpxTrack = {
  lines: GpxPosition[][];
  start?: GpxPosition;
  end?: GpxPosition;
  stats: TGpxData;
};

const gpxCache = new Map<string, Promise<GpxTrack>>();

/**
 * Fetches and parses a GPX file. Results are cached per url, so every
 * component asking for the same track shares one fetch and one parse.
 * Failed loads are evicted so a retry is possible.
 */
export function loadGpx(url: string): Promise<GpxTrack> {
  const cached = gpxCache.get(url);
  if (cached) {
    return cached;
  }

  const promise = fetchGpx(url);
  gpxCache.set(url, promise);
  promise.catch(() => {
    gpxCache.delete(url);
  });

  return promise;
}

async function fetchGpx(url: string): Promise<GpxTrack> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch the GPX file: ${response.status} ${response.statusText}`);
  }

  const [parsed, error] = parseGPX(await response.text());

  if (error) {
    throw error;
  }

  if (!parsed) {
    throw new Error(`Failed to parse the GPX file: ${url}`);
  }

  return toGpxTrack(parsed.toGeoJSON());
}

function toGpxTrack(geojson: GeoJSON): GpxTrack {
  const segments: GpxCoordinate[][] = [];

  for (const feature of geojson.features) {
    const { type, coordinates } = feature.geometry;
    if (type !== 'LineString' && type !== 'MultiLineString') {
      continue;
    }

    for (const line of toLines(coordinates as (number | null)[][])) {
      const coordinates = toCoordinates(line);
      if (coordinates.length > 0) {
        segments.push(coordinates);
      }
    }
  }

  const firstPoint = segments[0]?.[0];
  const lastSegment = segments[segments.length - 1];
  const lastPoint = lastSegment?.[lastSegment.length - 1];
  const toPosition = ([lng, lat]: GpxCoordinate): GpxPosition => [lat, lng];

  return {
    lines: segments.map((segment) => segment.map(toPosition)),
    start: firstPoint ? toPosition(firstPoint) : undefined,
    end: lastPoint ? toPosition(lastPoint) : undefined,
    stats: computeTrackStats(segments)
  };
}

/**
 * Normalizes a LineString (a single line) and a MultiLineString (several
 * lines) geometry. A MultiLineString nests one level deeper than the loose
 * GeoJSON typing from gpxjs suggests, so it is detected by shape.
 */
function toLines(raw: (number | null)[][]): (number | null)[][][] {
  const firstCoordinate = raw[0]?.[0];
  if (Array.isArray(firstCoordinate)) {
    // A MultiLineString: raw actually holds several lines.
    return raw as unknown as (number | null)[][][];
  }
  // A LineString: raw is a single line.
  return [raw];
}

function toCoordinates(line: (number | null)[][]): GpxCoordinate[] {
  const coordinates: GpxCoordinate[] = [];

  for (const point of line) {
    const lng = point[0];
    const lat = point[1];

    if (lng == null || lat == null) {
      continue;
    }

    const elevation = point[2] ?? undefined;
    coordinates.push([lng, lat, elevation]);
  }

  return coordinates;
}

const EARTH_RADIUS_KM = 6371;

function haversineKm(a: GpxCoordinate, b: GpxCoordinate): number {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const dLat = toRadians(b[1] - a[1]);
  const dLng = toRadians(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(toRadians(a[1])) * Math.cos(toRadians(b[1]));

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

/**
 * Computes total distance in km and cumulative ascent/descent/elevation range
 * in meters. Segments are treated as one continuous track, as GPX trkseg
 * pieces are.
 */
export function computeTrackStats(segments: GpxCoordinate[][]): TGpxData {
  let distance = 0;
  let ascent = 0;
  let descent = 0;
  let elevationMax = 0;
  let elevationMin = 0;
  let hasElevation = false;
  let previous: GpxCoordinate | undefined;

  for (const segment of segments) {
    for (const point of segment) {
      const elevation = point[2];

      if (previous) {
        distance += haversineKm(previous, point);

        if (previous[2] !== undefined && elevation !== undefined) {
          const delta = elevation - previous[2];
          if (delta >= 0) {
            ascent += delta;
          } else {
            descent += -delta;
          }
        }
      }

      if (elevation !== undefined) {
        if (!hasElevation) {
          elevationMax = elevation;
          elevationMin = elevation;
          hasElevation = true;
        } else {
          elevationMax = Math.max(elevationMax, elevation);
          elevationMin = Math.min(elevationMin, elevation);
        }
      }

      previous = point;
    }
  }

  return {
    distance: Math.round(distance),
    ascent: Math.round(ascent),
    descent: Math.round(descent),
    elevationMax: Math.round(elevationMax),
    elevationMin: Math.round(elevationMin)
  };
}
