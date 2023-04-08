import { useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutRouteProps } from 'react-router-dom';
import SignIn from '../pages/authentication/SignIn';
import { selectAuthState } from '../store/slices/authSlice';
import Header from './Header';
import Sidebar from './Sidebar';

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
              {props.children}
            </main>
          </>
        : 
        <SignIn />
      }
    </div>
  )
}

export default Layout;
