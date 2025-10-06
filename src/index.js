import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesConfig from './RoutesConfig';

import { ThemeProvider } from './scripts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesConfig />
    </ThemeProvider>
  </React.StrictMode>
);
