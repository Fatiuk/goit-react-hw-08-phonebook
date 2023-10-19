import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Contact Notebook!
        </Typography>
        <Typography variant="body1" paragraph align="center">
          This is your dedicated space for efficiently managing and securely
          storing all of your essential contacts. Here, you have the ability to
          easily add, update, and access your contact information from anywhere
          in the world. It's a powerful tool for organizing and maintaining your
          most critical business and personal connections, offering maximum
          flexibility and convenience.
        </Typography>
        <Typography variant="body1" paragraph>
          Stay organized and never lose a contact again. Your digital contact
          notebook is here to make your life simpler.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/registration"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
