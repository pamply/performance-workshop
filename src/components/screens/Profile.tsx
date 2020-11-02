import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './profile.css';

import React from 'react';
export default function Profile() {
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
