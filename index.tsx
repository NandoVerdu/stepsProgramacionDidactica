
import React from 'react';
import ReactDOM from 'react-dom/client';
// Make sure App.tsx exists in the same folder, or update the path if needed
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento raíz para montar la aplicación.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
