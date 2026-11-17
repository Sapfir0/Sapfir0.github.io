import { Route, Routes } from 'react-router';
import { AboutMe } from './about-me/about-me.tsx';
import { activities } from './data';
import { MAIN_APP_ROUTES } from './lib/constants.ts';
import { HomePage } from './pages/HomePage.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { TrekkingDetails } from './pages/TrekkingDetails.tsx';

export function AppRouter() {
  return (
    <Routes>
      <Route path={MAIN_APP_ROUTES.Main} element={<HomePage />} />
      <Route path={MAIN_APP_ROUTES.AboutMe} element={<AboutMe />} />
      {activities.trekking.map((trek) => (
        <Route key={trek.slug} path={trek.slug} element={<TrekkingDetails data={trek} />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
