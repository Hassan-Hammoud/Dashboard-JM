import '@syncfusion/ej2-react-grids/styles/material.css';
import '@syncfusion/ej2/material.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
const resizeObserverErr =
  /ResizeObserver loop completed|ResizeObserver loop limit exceeded/;
const originalConsoleError = console.error;
console.error = (...args) => {
  if (resizeObserverErr.test(args[0])) return;
  originalConsoleError.apply(console, args);
};
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
