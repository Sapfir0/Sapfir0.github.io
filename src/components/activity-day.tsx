import HikingIcon from '@mui/icons-material/Hiking';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import type { TDay, TGpxData } from '../lib/types.ts';
import { ActivityParam } from './activity-parameter.tsx';
import { GpxTrack } from './gpx-track.tsx';
import { Map } from './map.tsx';

export function ActivityDay({ day }: { day: TDay }) {
  const [gpxData, setGpxData] = useState<TGpxData | null>(null);

  return (
    <Card
      sx={{
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        height: '100%'
      }}
    >
      <CardContent sx={{ justifyContent: 'space-between' }}>
        {gpxData && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <ActivityParam title="Distance" value={gpxData.distance} suffix="km" icon={<HikingIcon />} />
            <ActivityParam title="Ascent" value={gpxData.ascent} suffix="m" icon={<MovingIcon />} />
            <ActivityParam title="Descent" value={gpxData.descent} suffix="m" icon={<TrendingDownIcon />} />
            <ActivityParam title="Max elevation" value={gpxData.elevationMax} suffix="m" />
            <ActivityParam title="Min elevation" value={gpxData.elevationMin} suffix="m" />
          </Box>
        )}

        <Map>
          <GpxTrack url={day.trackLink} fitToTrack onLoad={setGpxData} />
        </Map>

        <Typography sx={{ mt: 3, mb: 3 }}>{day.description}</Typography>
      </CardContent>
    </Card>
  );
}
