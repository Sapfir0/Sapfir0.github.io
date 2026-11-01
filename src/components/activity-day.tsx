import HikingIcon from '@mui/icons-material/Hiking';
import { Card, CardContent } from '@mui/material';
import type { TDay } from '../types.ts';
import { ActivityParam } from './activity-paramater.tsx';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export function ActivityDay({ day }: {day: TDay}) {
  return <Card sx={{
    borderRadius: '10px',
    boxShadow: ' -8px -4px 20px -2px rgba(0, 0, 0, 0.5);',
    height: '100%'
  }}>
    <CardContent sx={{ 'justifyContent': 'space-between' }}>
      <ActivityParam title="Distance" value={day.distance} suffix="km" icon={<HikingIcon/>}/>
      <ActivityParam title="Ascent" value={day.accent} suffix="m" icon={<MovingIcon/>}/>
      <ActivityParam title="Descent" value={day.descent} suffix="m" icon={<TrendingDownIcon/>}/>
      <ActivityParam title="Max elevation" value={day.maxElevation} suffix="m"/>
      <ActivityParam title="Min elevation" value={day.minElevation} suffix="m"/>

    </CardContent>
  </Card>;
}
