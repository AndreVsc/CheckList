import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './routes/ErrorPage.jsx';
import { createBrowserRouter, RouterProvider ,} from 'react-router-dom';
import './index.css';
import HomePage from './routes/HomePage.jsx';
import FormBlock from './components/forms/FormBlock.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/FormBlock",
    element: <FormBlock/>,
    errorElement: <ErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
