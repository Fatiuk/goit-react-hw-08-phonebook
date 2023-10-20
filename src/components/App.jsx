// ============ React ============
import { useEffect } from 'react';
// ============ React Redux ============
import { useDispatch } from 'react-redux';
// ============ React Router ============
import { Route, Routes } from 'react-router-dom';
// ============ ResponsiveAppBar ============
import SharedLayout from './SharedLayout/SharedLayout';
// ============ HomePage ============
import HomePage from 'pages/HomePage';
// ============ SignUp ============
import SignUp from 'pages/Register';
// ============ SignIn ============
import SignIn from 'pages/Login';
// ============ Contacts ============
import Contacts from 'pages/Contacts';
// ============ Refresh operation ============
import { refreshUser } from 'redux/auth/operations';
// ============ MUI Theme ============
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="registration" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
