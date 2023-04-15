import { useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { LayoutRouteProps, Outlet } from 'react-router-dom';
import SignIn from '../authentication/SignIn';
import { selectAuthState } from '../../redux/slices/authSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Layout = (props: LayoutRouteProps) => {
  const theme = useTheme();
  const auth = useSelector(selectAuthState);

  return (
    <div 
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      { auth ?
          <>
            <Header />
            <Sidebar />
          
            <main className='content-container'>
              <Outlet />
            </main>
          </>
        : 
        <SignIn />
      }
    </div>
  )
}

export default Layout;



