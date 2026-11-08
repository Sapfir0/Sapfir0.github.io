/// <reference types="leaflet-gpx" />
import { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import leafletUmdUrl from 'leaflet/dist/leaflet.js?url';
import type { TGpxData } from '../types.ts';

type GpxTrackProps = {
  url: string;
  onLoadGpx?: (gpxData: TGpxData) => void;
};

// The global Leaflet object published by the UMD build that leaflet-gpx reads.
type LeafletGlobal = {
  FeatureGroup: { extend: unknown } & typeof L.FeatureGroup;
  Icon: typeof L.Icon & { Default: unknown };
  GPX: typeof L.GPX;
};

// leaflet-gpx is a browser-global plugin: it has no `import` of leaflet and
// reads the bare global `L` at module load (e.g. `new L.Icon.Default`,
// `L.FeatureGroup.extend`, `L.Polyline`, ...). It relies on the UMD Leaflet
// build's mixin API (`Class.extend` / `include`), which the ESM build that
// `import * as L from 'leaflet'` resolves to does NOT provide. So we inject the
// UMD build (`leaflet/dist/leaflet.js`) as a classic script — the one that sets
// `window.L` and defines `Icon.Default` / `FeatureGroup.extend` — before
// importing the plugin.
function loadLeafletGlobal(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = (window as { L?: LeafletGlobal }).L;
    if (existing?.FeatureGroup?.extend) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = leafletUmdUrl;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Leaflet UMD build'));
    document.head.appendChild(script);
  });
}

export function GpxTrack({ url, onLoadGpx }: GpxTrackProps) {
  const map = useMap();

  useEffect(() => {
    let gpxLayer: L.GPX | null = null;
    let cancelled = false;

    async function initGpx() {
      await loadLeafletGlobal();

      await import('leaflet-gpx');

      if (cancelled) return;

      const globalL = (window as { L: LeafletGlobal }).L;

      gpxLayer = new globalL.GPX(url, {
        async: true,
        marker_options: {
          startIconUrl:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          endIconUrl:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
        },
        polyline_options: {
          color: '#ff2d95',
          weight: 4,
          opacity: 0.8
        }
      });

      gpxLayer.on('loaded', (event) => {
        if (gpxLayer) {
          onLoadGpx?.({
            distance: Math.round(gpxLayer.get_distance() / 1000),
            elevationData: gpxLayer.get_elevation_data(),
            elevationMin: Math.round(gpxLayer.get_elevation_min()),
            elevationMax: Math.round(gpxLayer.get_elevation_max()),
            accent: Math.round(gpxLayer.get_elevation_gain()),
            descent: Math.round(gpxLayer.get_elevation_loss())
          });
        }

        map.fitBounds(event.target.getBounds());
      });

      gpxLayer.addTo(map);
    }

    initGpx();

    return () => {
      cancelled = true;

      if (gpxLayer) {
        gpxLayer.removeFrom(map);
      }
    };
  }, [map, url]);

  return null;
}
