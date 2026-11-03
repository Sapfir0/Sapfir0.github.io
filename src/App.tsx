import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { TagFilter } from './const.ts';
import { REGIONS } from './services/filter-services.tsx';
import { TagSelector } from './components/type-selector.tsx';
import { ActivityCard } from './components/activity-card.tsx';
import type { TActivityStructure, TFilter } from './types.ts';
import { trekkingData } from './data';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('hiking');
  const [filtersRegionsList, setFiltersRegionsList] = useState<TFilter[]>(REGIONS);
  const [tagFiltersList, setTagFiltersList] = useState<Record<TagFilter, TFilter>>({});

  const data = trekkingData[currentTab]
    .filter((hike) => filtersRegionsList.some((condition) => condition.filter(hike)))
    .filter((hike) => Object.values(tagFiltersList).every((condition) => condition.filter(hike)))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const onChipClick = (tag: TFilter) => {
    const newData = { ...tagFiltersList };

    if (tag.label in tagFiltersList) {
      delete newData[tag.label];
      setTagFiltersList(newData);
    } else {
      setTagFiltersList((prevState) => ({ ...prevState, [tag.label]: tag }));
    }
  };

  const isLongCards = currentTab === 'trekking';

  return (
    <>
      <TagSelector tags={REGIONS} filters={filtersRegionsList} setFilters={setFiltersRegionsList} multiple />
      <Tabs
        value={currentTab}
        orientation="horizontal"
        onChange={(_, value) => {
          setCurrentTab(value);
        }}
      >
        {Object.keys(trekkingData).map((key) => (
          <Tab value={key} label={key} />
        ))}
      </Tabs>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((activity, i) => (
          <Grid key={activity.name} size={{ xs: 4, sm: 8, md: isLongCards ? 6 : 4 }}>
            <ActivityCard
              key={activity.name + i}
              activity={activity}
              setTagFilters={onChipClick}
              tagFilters={tagFiltersList}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
