import React from 'react';
import useStyles from './styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => props.setOpen(!props.open) }
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <Typography>
          {props.user.name}
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => props.handleLogout()}
        >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
