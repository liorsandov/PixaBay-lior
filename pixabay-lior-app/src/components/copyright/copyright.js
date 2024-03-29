import React from 'react';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Pixabay-Lior{` `}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
