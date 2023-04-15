import { useColorMode } from './assets/theme/theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './pages/layout/index';
import { AppRoutes } from './AppRoutes';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const theme = useColorMode();

  return (      
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          { AppRoutes.map((route, index) => {
            const { path, element} = route;
            return <Route
              key={`route-${index}`}
              element={<PrivateRoute>{element}</PrivateRoute>}
              path={path} />
          })}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
