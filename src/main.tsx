import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import { MainRouter } from './main-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="main">
        <MainRouter/>
      </div>
    </BrowserRouter>
  </StrictMode>
);
