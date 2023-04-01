import React, { useContext } from 'react';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme/theme';
import '../../assets/scss/layout/header.scss';

const Header = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div
      className='header-container'
      style={{ backgroundColor: colors.primary[400] }}
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
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </div>
  )
}

export default Header;