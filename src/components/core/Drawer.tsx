import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ExitToApp as ExitToAppIcon,
  Settings as SettingsIcon,
  AccountBox as AccountBoxIcon,
  Home as HomeIcon,
} from '@material-ui/icons';
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
