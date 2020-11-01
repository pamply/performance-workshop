import { Typography } from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';
import './settings.css';

import React from 'react';
export function Settings() {
  return (
    <div className="settings-container">
      <div className="header">
        <SettingsIcon fontSize={'inherit'} />
        <Typography variant="h3">Settings</Typography>
      </div>
      <img src="wip.png" />
    </div>
  );
}
