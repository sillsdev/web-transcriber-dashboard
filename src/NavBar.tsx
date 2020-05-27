import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          SIL Transcriber Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
