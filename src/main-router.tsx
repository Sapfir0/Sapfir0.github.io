import App from './App.tsx';
import { Route, Routes } from 'react-router';
import { trekkingData } from './data';
import { TrekkingDetails } from './trekking-details.tsx';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {trekkingData.trekking.map((trek) =>
        trek.link ? <Route key={trek.link} path={trek.link} element={<TrekkingDetails data={trek} />} /> : null
      )}
    </Routes>
  );
}
