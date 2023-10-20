import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import HeaderMenu from 'components/HeaderMenu/HeaderMenu';
import HeaderProfile from 'components/HeaderProfile/HeaderProfile';

const Header = () => {
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
          <HeaderMenu />
          <HeaderProfile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
