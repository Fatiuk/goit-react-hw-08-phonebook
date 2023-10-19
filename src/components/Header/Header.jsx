import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from 'react-router-dom';
import HeaderProfile from 'components/HeaderMenu/HeaderMenu';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const generateMenuItem = (text, to, onClick) => (
    <MenuItem onClick={onClick}>
      <Typography
        textAlign="center"
        component={Link}
        to={to}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {text}
      </Typography>
    </MenuItem>
  );

  const generateButton = (text, to, onClick) => (
    <Button
      onClick={onClick}
      component={Link}
      to={to}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {text}
    </Button>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(16, 20, 24, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AddIcCallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyContacts
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {generateMenuItem('Home Page', '/', handleCloseNavMenu)}
              {generateMenuItem('Contacts', '/contacts', handleCloseNavMenu)}
              {generateMenuItem('Favorites', '/favorites', handleCloseNavMenu)}
            </Menu>
          </Box>
          <AddIcCallIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyContacts
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {generateButton('Home Page', '/', handleCloseNavMenu)}
            {generateButton('Contacts', '/contacts', handleCloseNavMenu)}
            {generateButton('Favorites', '/favorites', handleCloseNavMenu)}
          </Box>
          <HeaderProfile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
