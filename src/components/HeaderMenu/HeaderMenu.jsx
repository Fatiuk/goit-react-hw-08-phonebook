import * as React from 'react';
import {
  Box,
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';

const HeaderMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Use auth selectors
  const { isLoggedIn } = useAuth();

  return (
    <>
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
          <MenuItem>
            <Typography
              textAlign="center"
              component={Link}
              to={'/'}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Home Page
            </Typography>
          </MenuItem>
          {isLoggedIn ? (
            <Box>
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/contacts'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Contacts
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/favorites'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Favorites
                </Typography>
              </MenuItem>
            </Box>
          ) : (
            <Box>
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/registration'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Registration
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/login'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Log In
                </Typography>
              </MenuItem>
            </Box>
          )}
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

      {isLoggedIn ? (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
            component={Link}
            to={'/contacts'}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Contacts
          </Button>
          <Button
            component={Link}
            to={'/favorites'}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Favorites
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
          }}
        >
          <>
            <Button
              component={Link}
              to={'/registration'}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Registration
            </Button>
            <Button
              component={Link}
              to={'/login'}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Log In
            </Button>
          </>
        </Box>
      )}
    </>
  );
};

export default HeaderMenu;
