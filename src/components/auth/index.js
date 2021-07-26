import React from 'react';
import { Avatar, Box, CssBaseline, Typography } from '@material-ui/core';
import useStyles from './styles';

const Auth = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box
        boxShadow={5}
        className={classes.paper}
      >
        <Avatar
          color="primary"
          className={classes.avatar}
        >
          {props.avatar}
        </Avatar>
        <Typography variant="h5">
          {props.title}
        </Typography>
        { props.children }
      </Box>
    </div>
  )
}

export default Auth;
