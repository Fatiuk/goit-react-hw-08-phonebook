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
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import stringAvatar from 'utils/avatarCreator';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

const HeaderProfile = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Create a Redux dispatcher
  const dispatch = useDispatch();

  // Create a Redux selectors
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUser);

  return (
    <div>
      {isLoggedIn && userData && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar {...stringAvatar(userData.name)} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
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
        </Box>
      )}
    </div>
  );
};

export default HeaderProfile;
