import { Box, Typography } from '@mui/material';
import { ActivityDay } from './components/activity-day.tsx';
import type { TTrekking } from './types.ts';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/styles.css';

export function TrekkingDetails({ data }: { data: TTrekking }) {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {data.name}
      </Typography>

      {data.days.map((day, index) => (
        <div key={`${data.name}-${index}`} style={{ marginBottom: 24 }}>
          <ActivityDay day={day} />
        </div>
      ))}
    </>
  );
}
