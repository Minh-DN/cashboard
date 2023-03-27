import { useEffect, useState } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { routes } from './components/routes';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import '../../assets/scss/layout/sidebar.scss';
import Avatar from './components/Avatar';

const Sidebar = () => {
  const [ expanded, setExpanded ] = useState(localStorage.getItem('sidebarExpanded') === 'true');
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    localStorage.setItem('sidebarExpanded', expanded.toString());
  }, [expanded]);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  const calcNavLinkStyle = (isActive: boolean, label?: string) => {

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
        { expanded && <span className='sidebar-menu-logo-text'>LeetBoard</span> }
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

export default Sidebar;


