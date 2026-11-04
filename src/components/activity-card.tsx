import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MovingIcon from '@mui/icons-material/Moving';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import { Box, Card, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material';
import { useRef } from 'react';
import { ActivityIcons } from '../components/activity-icons.tsx';
import { TagFilter } from '../const.ts';
import { RunChip, TentChip } from './chips.tsx';
import { ActivityParam } from './activity-paramater.tsx';
import type { TActivity, TTagFilter } from '../types.ts';

type TActivityCardProps = {
  activity: TActivity;
  setTagFilters: (tag: TTagFilter) => void;
  tagFilters: Partial<Record<TagFilter, TTagFilter>>;
};

export function ActivityCard({ activity, setTagFilters, tagFilters }: TActivityCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const href = activity.link ?? activity.wikiLoc;
  const days = 'days' in activity && Array.isArray(activity.days) ? activity.days : undefined;

  return (
    <Card
      sx={{
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        height: '100%'
      }}
      ref={ref}
    >
      {activity.withTent && <TentChip onClick={setTagFilters} selected={TagFilter.WithTent in tagFilters} />}
      {activity.run && <RunChip onClick={setTagFilters} selected={TagFilter.Running in tagFilters} />}

      <CardMedia component="img" height="250" image={activity.image} alt={activity.name} loading="lazy" />
      <CardContent
        sx={{
          height: '190px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {href ? (
          <Link href={href} underline="hover" variant="h6">
            {activity.name}
          </Link>
        ) : (
          <Typography variant="h6">{activity.name}</Typography>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mt: 1 }}>
          <PlaceIcon color="disabled" />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {[activity.mountainSystem, activity.district, activity.country].filter(Boolean).join(', ')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            mt: 1.5
          }}
        >
          <ActivityParam
            title="Distance"
            value={Math.round(activity.distance)}
            suffix="km"
            icon={<RouteIcon color="disabled" />}
          />
          <Divider orientation="vertical" flexItem />
          <ActivityParam title="Ascent" value={activity.accent} suffix="m" icon={<MovingIcon color="disabled" />} />

          {days && (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam title="Days" value={days.length} icon={<CalendarTodayIcon color="disabled" />} />
            </>
          )}

          <Divider orientation="vertical" flexItem />
          <ActivityIcons activity={activity} />
        </Box>
      </CardContent>
    </Card>
  );
}
