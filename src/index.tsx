import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import './index.scss';
import App from './App';
import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux';

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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
