import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { REGIONS } from './services/filter-services.tsx';
import { TagSelector } from './components/type-selector.tsx';
import { ActivityCard } from './components/activity-card.tsx';
import type { TActivityStructure, TFilter, TTrekking } from './types.ts';
import { trekkingData } from './data';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('hiking');
  const [filtersList, setFiltersList] = useState<TFilter[]>(REGIONS);

  const data = trekkingData[currentTab].filter((hike) => filtersList.some((condition) => condition.filter(hike)));

  const isLongCards = currentTab === 'trekking';

  return (
    <>
      <TagSelector tags={REGIONS} filters={filtersList} setFilters={setFiltersList} multiple />
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
            <ActivityCard key={activity.name + i} activity={activity as TTrekking} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
