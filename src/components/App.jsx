// ============ React ============
import { useEffect } from 'react';
// ============ React Redux ============
import { useDispatch } from 'react-redux';
// ============ React Router ============
import { Route, Routes } from 'react-router-dom';
// ============ Toaster ============
import { Toaster } from 'react-hot-toast';
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
// ============ Profile ============
import Profile from 'pages/Profile';
// ============ Refresh operation ============
import { refreshUser } from 'redux/auth/operations';
// ============ RestrictedRoute ============
import { RestrictedRoute } from './RestrictedRoute';
// ============ PrivateRoute ============
import { PrivateRoute } from './PrivateRoutes';
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
          <Route
            path="registration"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
