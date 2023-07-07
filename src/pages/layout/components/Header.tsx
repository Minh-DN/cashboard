import React, { useContext } from 'react';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../../../assets/theme/theme';
import '../../../assets/scss/pages/header.scss';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../../../redux/slices/themeSlice';
import { toggleAuth } from '../../../redux/slices/authSlice';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  return (
    <div
      className='header-container'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      {/* SEARCH BAR */}
      <Box
        component={'div'}
        display="flex"
        borderRadius="3px"
        style={{ backgroundColor: colors.primary[400] }}
      > 
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"/>
        <IconButton sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS MENU */}
      <Box display="flex">
        <IconButton onClick={() => dispatch(toggleColorMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton onClick={() => dispatch(toggleAuth())}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </div>
  )
}

export default Header;