import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';
import { DrawerMenu } from './Drawer';
import './header.css';

const LeftSideMenu = ({ open, setOpen }: any) => (
  <div className="left-side-menu-container">
    <IconButton
      onClick={() => setOpen(!open)}
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h5">Best food app ever</Typography>
  </div>
);

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="header">
      <AppBar position="absolute">
        <Toolbar>
          <div className={'toolbar'}>
            <LeftSideMenu open={open} setOpen={setOpen} />
          </div>
        </Toolbar>
        <DrawerMenu open={open} setOpen={setOpen} />
      </AppBar>
    </div>
  );
};
