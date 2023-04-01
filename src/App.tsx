import { ColorModeContext, useMode } from './theme/theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './layout';
import { AppRoutes, GuestRoutes } from './AppRoutes';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import SignIn from './pages/authentication/SignIn';

function App() {
  const { theme, colorMode } = useMode();
  console.log(AppRoutes);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Layout>
          <Routes>

              { AppRoutes.map((route, index) => {
                const { element, path } = route;
                return <Route key={`route-${index}`} element={element} path={path}/>
              })}

          </Routes>
        </Layout> 
      </ThemeProvider>
    </ColorModeContext.Provider>
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
