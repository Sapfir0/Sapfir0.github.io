import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import TerrainIcon from '@mui/icons-material/Terrain';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Card, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { TagFilter } from '../const.ts';
import { RunChip, TentChip } from './chips.tsx';
import { ActivityParam } from '../components/activity-paramater.tsx';
import type { TActivity, TFilter } from '../types.ts';

type TActivityCardProps<T extends TActivity> = {
  activity: T;
  setTagFilters: (tag: TFilter) => void;
  tagFilters: Record<TagFilter, TFilter>;
};

const MAXIMUM_WIDTH = 450;

export function ActivityCard<T extends TActivity>({ activity, setTagFilters, tagFilters }: TActivityCardProps<T>) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isWideCard, setIsWideCard] = useState(false);
  useEffect(() => {
    setIsWideCard(ref.current ? ref.current.offsetWidth > MAXIMUM_WIDTH : false);
  }, [ref]);

  return (
    <Card
      sx={{
        borderRadius: '10px',
        boxShadow: ' -8px -4px 20px -2px rgba(0, 0, 0, 0.5);',
        height: '100%'
      }}
      ref={ref}
    >
      {activity.withTent && <TentChip onClick={setTagFilters} selected={TagFilter.WithTent in tagFilters} />}
      {activity.run && <RunChip onClick={setTagFilters} selected={TagFilter.Running in tagFilters} />}

      <CardMedia component="img" height="250" image={activity.image} />
      <CardContent sx={{ justifyContent: 'space-between' }}>
        <Link href={activity.link ?? activity.wikiLoc}>{activity.name}</Link>

        <div style={{ display: 'flex', marginTop: '10px' }}>
          <PlaceIcon color="disabled" />
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {[activity.mountainSystem, activity.district, activity.country].filter(Boolean).join(', ')}
          </Typography>
        </div>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <ActivityParam
            title="Distance"
            value={`${Math.round(activity.distance)} km`}
            icon={<TerrainIcon color="disabled" />}
          />
          <Divider orientation="vertical" flexItem />
          <ActivityParam title="Accent" value={`${activity.accent} m`} icon={<RouteIcon color="disabled" />} />
          {activity.temperature && isWideCard && (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam
                title="Hike temperature"
                value={`${activity.temperature} °C (${new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short'
                }).format(activity.date)})`}
                icon={activity.temperature > 7 ? <WbSunnyIcon color="disabled" /> : <SevereColdIcon color="disabled" />}
              />
            </>
          )}

          {'days' in activity && Array.isArray(activity.days) ? (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam
                title="Days"
                value={activity.days?.length + 1}
                icon={<CalendarTodayIcon color="disabled" />}
              />
            </>
          ) : undefined}
        </Box>
      </CardContent>
    </Card>
  );
}
