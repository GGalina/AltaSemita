import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Add a null check to ensure TypeScript knows this element exists
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create a root using ReactDOM
const root = ReactDOM.createRoot(rootElement);

// Render the React app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
