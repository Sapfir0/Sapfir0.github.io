import App from './App.tsx';
import { Routes, Route } from 'react-router';
import { trekkingData } from './data';
import { Arhyz } from './arhyz';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {trekkingData.trekking.map((trek) => (
        <Route path={trek.link} element={<Arhyz data={trek} />} />
      ))}
    </Routes>
  );
}
