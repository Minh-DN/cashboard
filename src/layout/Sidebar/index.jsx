import { useEffect, useMemo, useRef, useState } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { routes } from './components/routes';
import { ColorModeContext, tokens } from '../../theme';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import '../../assets/scss/layout/sidebar.scss';
import styled from 'styled-components';
import Avatar from './components/Avatar';

const Sidebar = () => {
  const [ expanded, setExpanded ] = useState(localStorage.getItem('sidebarExpanded') === 'true');
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    localStorage.setItem('sidebarExpanded', expanded);
  }, [expanded]);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  const calcNavLinkStyle = (isActive, label) => {

    const calcPaddingLeft = () => {
      // if (!isActive) {
      //   return label ? '40px' : '20px';
      // } else {
      //   return label ? '38px' : '18px';
      // }
      return label ? '40px' : '20px';
    }

    return {
      ...(isActive && {
        color: colors.greenAccent[500],
        borderLeft: `2px ${colors.greenAccent[500]} solid`,
      }),
      paddingLeft: calcPaddingLeft(),
    }
  }

  return (
    <SidebarMenu
      expanded={expanded}
      style={{ backgroundColor: colors.primary[400] }}
    > 
      {/* HEADER */}
      <SidebarMenu.Header >            
        { expanded && <LogoText>LeetBoard</LogoText> }
        <div className = 'sidebar-menu-hamburger-icon'> 
          <IconButton onClick={handleSidebarToggle}>
              <MenuOutlinedIcon style={{ fontSize: '28px' }}/>
          </IconButton>
        </div>
      </SidebarMenu.Header>

      {/* AVATAR */}
      { expanded && <Avatar /> }

      {/* BODY - NAV MENU */}
      <SidebarMenu.Body>  
        { expanded ? (
          <SidebarMenu.Nav>
            {routes && routes.map(({ label, icon, link }, index) =>
              <NavLink to={link} className='sidebar-menu-nav-link' key={index} 
                style={({ isActive }) => calcNavLinkStyle(isActive, label)}
              >
                <div className='sidebar-menu-nav-icon'>{icon}</div>
                <div className='sidebar-menu-nav-title'>{label}</div>
              </NavLink>
            )}
          </SidebarMenu.Nav> 
        ) : (
          <SidebarMenu.Nav>
            {routes && routes.map(({ icon, link }, index) =>
              <NavLink to={link} className='sidebar-menu-nav-link' key={index}
                style={({ isActive }) => calcNavLinkStyle(isActive)}
              >
                <div className='sidebar-menu-nav-icon'>{icon}</div>
              </NavLink>
            )}
          </SidebarMenu.Nav> 
        )}
      </SidebarMenu.Body>
    </SidebarMenu>
  )
}

const LogoText = styled.span`
  animation: fade-in 2.5s;
  margin-left: 15px;
  font-size: 20px;
  font-weight: 500;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } 
`;

export default Sidebar;


