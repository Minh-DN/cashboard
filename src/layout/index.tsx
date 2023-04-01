import { useTheme } from '@mui/material';
import { useState } from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import SignIn from '../pages/authentication/SignIn';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props: LayoutRouteProps) => {
  const theme = useTheme();

  const [auth, setAuth] = useState(false);

  const handleAuth = () => setAuth(!auth);

  return (
    <div 
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      { auth ?
          <>
            <Header /><button onClick={handleAuth}>Sign out</button>
            <Sidebar />
      
            <main className='content-container'>
              {props.children}
            </main>
          </>
        : 
        <><SignIn /><button onClick={handleAuth}>Sign IN</button></>
      }
    </div>
  )
}

export default Layout;
