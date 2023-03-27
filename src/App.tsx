import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './assets/scss/App.scss';
import Layout from './layout';
import AppRoutes from './AppRoutes';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            { AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={`route-${index}`} {...rest} element={element} />
            })}
          </Routes>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
