import HikingIcon from '@mui/icons-material/Hiking';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import { Map } from '../components/map.tsx';
import type { TDay, TGpxData } from '../types.ts';
import { ActivityParam } from './activity-paramater.tsx';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { GpxTrack } from '../components/gpx-track.tsx';

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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ActivityParam title="Distance" value={gpxData.distance} suffix="km" icon={<HikingIcon />} />
            <ActivityParam title="Ascent" value={gpxData.accent} suffix="m" icon={<MovingIcon />} />
            <ActivityParam title="Descent" value={gpxData.descent} suffix="m" icon={<TrendingDownIcon />} />
            <ActivityParam title="Max elevation" value={gpxData.elevationMax} suffix="m" />
            <ActivityParam title="Min elevation" value={gpxData.elevationMin} suffix="m" />
          </Box>
        )}

        {day.trackLink && (
          <Map>
            <GpxTrack url={day.trackLink} onLoadGpx={setGpxData} />
          </Map>
        )}

        <Typography sx={{ mt: 3, mb: 3 }}>{day.description}</Typography>
      </CardContent>
    </Card>
  );
}
