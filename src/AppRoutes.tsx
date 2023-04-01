import DashboardPage from "./pages/Dashboard";
import SignIn from "./pages/authentication/SignIn";

export const AppRoutes = [
  {
    path: '/',
    element: <DashboardPage />,
  }, 
  {
    path: '/team',
    element: <div>Hellllo</div>
  },
]

export const GuestRoutes = [
  {
    path: "/sign-in",
    element: <SignIn />
  }
]
