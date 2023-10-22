import * as React from 'react';
import {
  Box,
  IconButton,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import stringAvatar from 'utils/avatarCreator';
import { useAuth } from '../../hooks';

const HeaderProfile = () => {
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElProfile(null);
  };

  // Create a Redux dispatcher
  const dispatch = useDispatch();
  // Use auth selectors
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      {isLoggedIn && user && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar {...stringAvatar(user.name)} />
            </IconButton>
          </Tooltip>
          {anchorElProfile && (
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElProfile}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElProfile)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/profile'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                <Typography
                  textAlign="center"
                  component={Link}
                  to={'/'}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Log Out
                </Typography>
              </MenuItem>
            </Menu>
          )}
        </Box>
      )}
    </>
  );
};

export default HeaderProfile;
