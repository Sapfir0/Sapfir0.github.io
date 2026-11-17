import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EventIcon from '@mui/icons-material/Event';
import FestivalIcon from '@mui/icons-material/Festival';
import MovingIcon from '@mui/icons-material/Moving';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import StarIcon from '@mui/icons-material/Star';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Box, Card, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material';
import { TagFilter } from '../lib/constants.ts';
import type { TActivity, TTagFilter, THiking, TTrekking } from '../lib/types.ts';
import { formatMonthYear } from '../utils/formatter.ts';
import { ActivityIcons } from './activity-icons.tsx';
import { ActivityParam } from './activity-parameter.tsx';
import { TagChip } from './tag-chip.tsx';

type TActivityCardProps = {
  activity: TActivity;
  onTagClick: (tag: TTagFilter) => void;
  tagFilters: Partial<Record<TagFilter, TTagFilter>>;
};

function isTrekking(activity: TActivity): activity is TTrekking {
  return 'days' in activity;
}

function hasTemperature(activity: TActivity): activity is TTrekking | THiking {
  return 'temperature' in activity;
}

function temperatureLabel(activity: TActivity): string | undefined {
  if (!hasTemperature(activity)) {
    return undefined;
  }

  const temperature = activity.temperature;

  return typeof temperature === 'number' ? `${temperature}\u00B0C` : `${temperature[0]}\u2026${temperature[1]}\u00B0C`;
}

export function ActivityCard({ activity, onTagClick, tagFilters }: TActivityCardProps) {
  const href = activity.slug || activity.externalLink;
  const days = isTrekking(activity) ? activity.days : undefined;
  const temperature = temperatureLabel(activity);

  return (
    <Card
      sx={{
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        height: '100%'
      }}
    >
      {activity.withTent && (
        <TagChip
          tag={TagFilter.WithTent}
          icon={<FestivalIcon />}
          color="success"
          selected={TagFilter.WithTent in tagFilters}
          onClick={onTagClick}
        />
      )}
      {activity.run && (
        <TagChip
          tag={TagFilter.Running}
          icon={<DirectionsRunIcon />}
          color="primary"
          selected={TagFilter.Running in tagFilters}
          onClick={onTagClick}
        />
      )}

      <CardMedia component="img" height="250" image={activity.image} alt={activity.name} loading="lazy" />
      <CardContent
        sx={{
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

        <Box sx={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', mt: 1.5 }}>
          <ActivityParam
            title="Distance"
            value={activity.distance.toFixed(1)}
            suffix="km"
            icon={<RouteIcon color="disabled" />}
          />
          <Divider orientation="vertical" flexItem />
          <ActivityParam title="Ascent" value={activity.ascent} suffix="m" icon={<MovingIcon color="disabled" />} />

          {days && (
            <>
              <Divider orientation="vertical" flexItem />
              <ActivityParam title="Days" value={days.length} icon={<CalendarTodayIcon color="disabled" />} />
            </>
          )}
        </Box>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', mt: 1 }}>
          <ActivityParam title="Date" value={formatMonthYear(activity.date)} icon={<EventIcon color="disabled" />} />
          <Divider orientation="vertical" flexItem />
          {temperature && (
            <>
              <ActivityParam title="Temperature" value={temperature} icon={<ThermostatIcon color="disabled" />} />
              <Divider orientation="vertical" flexItem />
            </>
          )}
          {activity.rating !== undefined && (
            <>
              <ActivityParam title="Rating" value={`${activity.rating}/10`} icon={<StarIcon color="disabled" />} />
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <ActivityIcons activity={activity} />
        </Box>
      </CardContent>
    </Card>
  );
}
