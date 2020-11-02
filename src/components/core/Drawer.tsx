import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface MenuConfigItem {
  label: string;
  path: string;
  Icon: any;
}

const menuConfigItems: MenuConfigItem[] = [
  {
    label: 'Home',
    path: '/',
    Icon: HomeIcon,
  },
  {
    label: 'Settings',
    path: '/settings',
    Icon: SettingsIcon,
  },
  {
    label: 'Profile',
    path: '/profile',
    Icon: AccountBoxIcon,
  },
  {
    label: 'Logout',
    path: '/logout',
    Icon: ExitToAppIcon,
  },
];

export const DrawerMenu = ({ open, setOpen }: any) => {
  const history = useHistory();
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="drawer-container">
        <List>
          {menuConfigItems.map(({ label, path, Icon }) => (
            <ListItem
              button
              key={path}
              onClick={() => {
                setOpen(false);
                history.push(path);
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
