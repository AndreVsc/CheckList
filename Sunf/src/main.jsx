import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage.jsx';
import HomePage from './routes/HomePage.jsx';
import App from './app/app.jsx';
import KanbanPage from './routes/KanbanPage.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:id',
        element: <KanbanPage />, 
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
