import DashboardPage from "../pages/Dashboard";
import TeamsPage from "../pages/Teams";
import SignIn from "../pages/authentication/SignIn";

export const AppRoutes = [
  {
    path: '/',
    element: <DashboardPage />,
  }, 
  {
    path: '/team',
    element: <TeamsPage />,
  },
]

export const GuestRoutes = [
  {
    path: "/sign-in",
    element: <SignIn />
  }
]
