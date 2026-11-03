import { Grid, Tab, Tabs } from '@mui/material';
import { useMemo, useState } from 'react';
import { TagFilter } from './const.ts';
import { REGIONS } from './services/filter-services.tsx';
import { TagSelector } from './components/type-selector.tsx';
import { ActivityCard } from './components/activity-card.tsx';
import type { TActivityStructure, TRegionFilter, TTagFilter } from './types.ts';
import { trekkingData } from './data';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('hiking');
  const [filtersRegionsList, setFiltersRegionsList] = useState<TRegionFilter[]>(REGIONS);
  const [tagFiltersList, setTagFiltersList] = useState<Partial<Record<TagFilter, TTagFilter>>>({});

  const data = useMemo(
    () =>
      trekkingData[currentTab]
        .filter((hike) => filtersRegionsList.some((condition) => condition.filter(hike)))
        .filter((hike) => Object.values(tagFiltersList).every((condition) => condition.filter(hike)))
        .sort((a, b) => b.date.getTime() - a.date.getTime()),
    [currentTab, filtersRegionsList, tagFiltersList]
  );

  const onChipClick = (tag: TTagFilter) => {
    setTagFiltersList((prevState) => {
      const nextState = { ...prevState };

      if (tag.label in nextState) {
        delete nextState[tag.label];
      } else {
        nextState[tag.label] = tag;
      }

      return nextState;
    });
  };

  const isLongCards = currentTab === 'trekking';

  return (
    <div className="app">
      <div className="app__filters">
        <TagSelector tags={REGIONS} filters={filtersRegionsList} setFilters={setFiltersRegionsList} multiple />
      </div>

      <Tabs
        className="app__tabs"
        value={currentTab}
        orientation="horizontal"
        onChange={(_, value: keyof TActivityStructure) => {
          setCurrentTab(value);
        }}
      >
        {Object.keys(trekkingData).map((key) => (
          <Tab key={key} value={key} label={key} />
        ))}
      </Tabs>

      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((activity) => (
          <Grid key={activity.name} size={{ xs: 4, sm: 8, md: isLongCards ? 6 : 4 }}>
            <ActivityCard activity={activity} setTagFilters={onChipClick} tagFilters={tagFiltersList} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
