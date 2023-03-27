import DashboardPage from "./pages/Dashboard";

const AppRoutes = [
  {
    index: true,
    element: <DashboardPage />,
  }, 
  {
    index: '/team',
    element: <div>Hello</div>
  }
]

export default AppRoutes;