import { useMode } from './theme/theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './layout';
import { AppRoutes } from './AppRoutes';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

function App() {
  const theme = useMode();

  return (      
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          { AppRoutes.map((route, index) => {
            const { path, element} = route;
            return <Route key={`route-${index}`} element={element} path={path}/>
          })}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

const RequireAuth = () => {
  const auth = false;

  return (
    auth
      ? <Outlet />
      : <Navigate to='/sign-in' replace />
  )
}

export default App;
