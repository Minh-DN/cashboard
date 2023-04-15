import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import App from './App';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import SignIn from './pages/authentication/SignIn';
import './assets/scss/index.scss';
import TeamsPage from './pages/teams';
import DashboardPage from './pages/dashboard';

/** 
 * Using HashRouter instead of BrowserRouter 
 * because GitHub Pages does not natively support single-page applications
 */
const router = createHashRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "/team",
        element: <TeamsPage />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "*",
        element: <Navigate to='/' replace/>
      }
    ]
  }],
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
