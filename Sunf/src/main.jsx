import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

//
import ErrorPage from './routes/ErrorPage.jsx';
import HomePage from './routes/HomePage.jsx';
import Checklist from './routes/Checklist.jsx';
import App from './app/app.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <Checklist />, // Use the Checklist component here
      }
    ],
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
