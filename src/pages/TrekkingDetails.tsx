import { Typography } from '@mui/material';
import { useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
import { ActivityDay } from '../components/activity-day.tsx';
import { GpxTracks } from '../components/gpx-track.tsx';
import { Map } from '../components/map.tsx';
import type { TTrekking } from '../lib/types.ts';

export function TrekkingDetails({ data }: { data: TTrekking }) {
  const trackUrls = useMemo(() => data.days.map((day) => day.trackLink), [data]);

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {data.name}
      </Typography>

      <Map height={600}>
        <GpxTracks urls={trackUrls} />
      </Map>

      <Typography sx={{ mt: 3, mb: 3 }}>{data.description}</Typography>

      {data.days.map((day, index) => (
        <div key={`${data.slug}-day-${index + 1}`} style={{ marginBottom: 24 }}>
          <Typography>Day {index + 1}</Typography>
          <ActivityDay day={day} />
        </div>
      ))}
    </>
  );
}
