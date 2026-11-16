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
        // @ts-expect-error TODO Не правильный тип в leaflet-types
        markers: {
          startIcon:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          endIcon: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          wptIcons: {
            '': 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'
          }
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
