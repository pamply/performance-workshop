import { Typography } from '@material-ui/core';
import { AccountBox as AccountBoxIcon } from '@material-ui/icons';
import './profile.css';

import React from 'react';
export function Profile() {
  return (
    <div className="profile-container">
      <div className="header">
        <AccountBoxIcon fontSize={'inherit'} />
        <Typography variant="h3">Profile</Typography>
      </div>
      <img src="wip.png" />
    </div>
  );
}
