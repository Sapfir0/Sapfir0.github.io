import { Typography } from '@mui/material';
import { GpxTrack } from './components/gpx-track.tsx';
import { Map } from './components/map.tsx';
import { ActivityDay } from './components/activity-day.tsx';
import type { TTrekking } from './types.ts';
import 'leaflet/dist/leaflet.css';

export function TrekkingDetails({ data }: { data: TTrekking }) {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {data.name}
      </Typography>

      <Map height={600}>
        {data.days.map((day) => (
          <GpxTrack url={day.trackLink} />
        ))}
      </Map>

      <Typography sx={{ mt: 3, mb: 3 }}>{data.description}</Typography>

      {data.days.map((day, index) => (
        <div key={`${data.name}-${index}`} style={{ marginBottom: 24 }}>
          <Typography>Day {index + 1}</Typography>
          <ActivityDay day={day} />
        </div>
      ))}
    </>
  );
}
