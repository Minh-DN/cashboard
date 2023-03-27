import { useTheme } from '@emotion/react';
import React from 'react';
import { tokens } from '../theme';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div 
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Header />
      <Sidebar />

      <main className='content-container'>
        {children}
      </main>
    </div>
  )
}

export default Layout;