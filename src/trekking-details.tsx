import { Typography } from '@mui/material';
import { ActivityDay } from './components/activity-day.tsx';
import type { TTrekking } from './types.ts';
import { MapContainer, TileLayer } from 'react-leaflet';

export function TrekkingDetails({ data }: { data: TTrekking }) {
  return (
    <>
      <MapContainer>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
