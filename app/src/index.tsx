import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
