import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
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

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="header">
      <AppBar>
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

export default Header;
