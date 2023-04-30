import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

