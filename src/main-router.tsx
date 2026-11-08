import { AboutMe } from './about-me/about-me.tsx';
import { MAIN_APP_ROUTES } from './const.ts';
import App from './App.tsx';
import { Route, Routes } from 'react-router';
import { trekkingData } from './data';
import { TrekkingDetails } from './trekking-details.tsx';

export function MainRouter() {
  return (
    <Routes>
      <Route path={MAIN_APP_ROUTES.Main} element={<App />} />
      <Route path={MAIN_APP_ROUTES.AboutMe} element={<AboutMe />} />
      {trekkingData.trekking.map((trek) =>
        trek.link ? <Route key={trek.link} path={trek.link} element={<TrekkingDetails data={trek} />} /> : null
      )}
    </Routes>
  );
}
