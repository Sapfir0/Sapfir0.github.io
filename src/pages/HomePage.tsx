import { Avatar, Box, Button, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { NavLink } from 'react-router';
import { ActivityCard } from '../components/activity-card.tsx';
import { GpxTracks } from '../components/gpx-track.tsx';
import { Map } from '../components/map.tsx';
import { TagSelector } from '../components/type-selector.tsx';
import { useActivityFilters } from '../hooks/use-activity-filters.ts';
import { activities, getTrackLink } from '../data';
import { ACTIVITY_TAB_LABELS, MAIN_APP_ROUTES } from '../lib/constants.ts';
import { REGIONS } from '../lib/filters.ts';
import type { TActivityStructure } from '../lib/types.ts';

import './HomePage.css';

export function HomePage() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('hiking');
  const [shouldShowMap, setShouldShowMap] = useState(false);
  const { filtersRegionsList, setFiltersRegionsList, tagFiltersList, toggleTag } = useActivityFilters();

  const data = useMemo(
    () =>
      activities[currentTab]
        .filter((activity) => filtersRegionsList.some((region) => region.filter(activity)))
        .filter((activity) => Object.values(tagFiltersList).every((tag) => (tag ? tag.filter(activity) : true)))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [currentTab, filtersRegionsList, tagFiltersList]
  );

  const trackUrls = useMemo(
    () => data.map((activity) => getTrackLink(activity)).filter((url): url is string => url !== undefined),
    [data]
  );

  const isLongCards = currentTab === 'trekking';

  return (
    <div className="app">
      <div className="app__filters">
        <TagSelector tags={REGIONS} filters={filtersRegionsList} setFilters={setFiltersRegionsList} multiple />
        <Box sx={{ display: 'flex', gap: 3 }}>
          <NavLink to={MAIN_APP_ROUTES.AboutMe}>
            <Avatar src="/avatar.jpg" />
          </NavLink>
        </Box>
      </div>

      <Tabs
        className="app__tabs"
        value={currentTab}
        orientation="horizontal"
        onChange={(_, value: keyof TActivityStructure) => {
          setCurrentTab(value);
        }}
      >
        {Object.keys(activities).map((key) => (
          <Tab key={key} value={key} label={ACTIVITY_TAB_LABELS[key as keyof TActivityStructure]} />
        ))}
      </Tabs>
      <Button onClick={() => setShouldShowMap((value) => !value)}>{shouldShowMap ? 'Hide map' : 'Show map'}</Button>

      <Map hidden={!shouldShowMap}>
        <GpxTracks urls={trackUrls} active={shouldShowMap} />
      </Map>

      {data.length === 0 ? (
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
          No activities match the selected filters.
        </Typography>
      ) : (
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((activity) => (
            <Grid key={activity.slug} size={{ xs: 4, sm: 8, md: isLongCards ? 6 : 4 }}>
              <ActivityCard activity={activity} onTagClick={toggleTag} tagFilters={tagFiltersList} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
