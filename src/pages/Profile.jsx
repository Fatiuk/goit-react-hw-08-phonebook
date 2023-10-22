import {
  Avatar,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { logOut } from 'redux/auth/operations';
import stringAvatar from 'utils/avatarCreator';

const Profile = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();
  // Use auth selectors
  const { isLoggedIn, user } = useAuth();

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        marginTop: 8,
      }}
    >
      {isLoggedIn && user && (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Avatar {...stringAvatar(user.name)}></Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6">Name: {user.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Email: {user.email}
              </Typography>
            </Grid>
          </Grid>

          <Button
            onClick={() => {
              dispatch(logOut());
            }}
            component={Link}
            to={'/'}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Log Out
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default Profile;
