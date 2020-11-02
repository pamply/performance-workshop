import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import './settings.css';

import React from 'react';
export default function Settings() {
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
