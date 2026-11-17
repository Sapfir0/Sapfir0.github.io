import React from 'react';
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

type MapProps = {
  children?: React.ReactNode;
  zoom?: number;
  height?: number;
  /**
   * Hides the map with CSS instead of unmounting it, so Leaflet (and the
   * loaded tracks) keep their state across show/hide toggles.
   */
  hidden?: boolean;
};

// Rough center of the areas the trips cover. Components that load tracks call
// fitBounds once the data arrives and override this default.
const DEFAULT_CENTER: [number, number] = [45, 60];

function MapInvalidator({ hidden }: { hidden: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (!hidden) {
      // The container had zero size while hidden, so Leaflet needs to
      // re-measure before the tiles render correctly.
      map.invalidateSize();
    }
  }, [hidden, map]);

  return null;
}

export function Map({ children, zoom = 4, height = 350, hidden = false }: MapProps) {
  return (
    <div style={{ height, display: hidden ? 'none' : undefined }}>
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapInvalidator hidden={hidden} />
        {children}
      </MapContainer>
    </div>
  );
}
