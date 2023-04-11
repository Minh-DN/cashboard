import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import SignIn from './pages/authentication/SignIn';
import './assets/scss/index.scss';
import TeamsPage from './pages/teams';
import DashboardPage from './pages/dashboard';

const isProduction = process.env.NODE_ENV === 'production'; 

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        path: "/team",
        element: <TeamsPage />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      }
    ]
  }], 
  { 
    basename: isProduction ? "/cashboard" : ''
  }
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
