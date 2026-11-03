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
import { ActivityParam } from './activity-paramater.tsx';
import type { TActivity, TTagFilter } from '../types.ts';

type TActivityCardProps = {
  activity: TActivity;
  setTagFilters: (tag: TTagFilter) => void;
  tagFilters: Partial<Record<TagFilter, TTagFilter>>;
};

const MAXIMUM_WIDTH = 450;
const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short'
});

function getTemperature(activity: TActivity) {
  return 'temperature' in activity && typeof activity.temperature === 'number' ? activity.temperature : undefined;
}

export function ActivityCard({ activity, setTagFilters, tagFilters }: TActivityCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isWideCard, setIsWideCard] = useState(false);
  const temperature = getTemperature(activity);
  const href = activity.link ?? activity.wikiLoc;
  const days = 'days' in activity && Array.isArray(activity.days) ? activity.days : undefined;

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setIsWideCard(entry.contentRect.width > MAXIMUM_WIDTH);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
      <CardContent>
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
            icon={<TerrainIcon color="disabled" />}
          />
          <Divider orientation="vertical" flexItem />
          <ActivityParam title="Ascent" value={activity.accent} suffix="m" icon={<RouteIcon color="disabled" />} />
          {temperature !== undefined && isWideCard && (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam
                title="Hike temperature"
                value={`${temperature} °C (${MONTH_YEAR_FORMAT.format(activity.date)})`}
                icon={temperature > 7 ? <WbSunnyIcon color="disabled" /> : <SevereColdIcon color="disabled" />}
              />
            </>
          )}

          {days && (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam title="Days" value={days.length} icon={<CalendarTodayIcon color="disabled" />} />
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
