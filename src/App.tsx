import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './layout';
import AppRoutes from './AppRoutes';
import { Routes, Route } from 'react-router-dom';

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

export default App;
