import { useColorMode } from './theme/theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './layout';
import { AppRoutes } from './routes/AppRoutes';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

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
