import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import SignIn from './pages/authentication/SignIn';
import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/team",
        element: <div>Helo</div>,
      },
      {
        path: '/create-user',
        element: <div></div>
      },
      {
        path: '/calendar',
        element: <div>Helo</div>,
      },
      {
        path: '/faq',
        element: <div>Helo</div>,
      },
      {
        path: '/by-category',
        element: <div>Helo</div>,
      },
      {
        path: '/by-total',
        element: <div>Helo</div>,
      },
      {
        path: '/over-time',
        element: <div>Helo</div>,
      },

    ]
  },      {
    path: "/sign-in",
    element: <SignIn />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
