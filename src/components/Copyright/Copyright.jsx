import { Typography } from '@mui/material';

const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a
        color="inherit"
        href="https://github.com/Fatiuk"
        style={{ marginRight: '4px', color: 'inherit' }}
      >
        Andrii Fatiuk
      </a>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
