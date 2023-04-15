import DashboardPage from "./pages/dashboard";
import TeamsPage from "./pages/teams";
import SignIn from "./pages/authentication/SignIn";
import { Navigate } from "react-router-dom";

export const AppRoutes = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
  }, 
  {
    path: '/team',
    element: <TeamsPage />,
  },
]

export const GuestRoutes = [
  {
    path: '/sign-in',
    element: <SignIn />,
  }, 
]
