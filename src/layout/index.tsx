import { useTheme } from '@mui/material';
import { LayoutRouteProps } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props: LayoutRouteProps) => {
  const theme = useTheme();

  return (
    <div 
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Header />
      <Sidebar />

      <main className='content-container'>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;