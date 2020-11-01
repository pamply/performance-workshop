import { Typography } from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';

import React from 'react';
export function Settings() {
  return (
    <div>
      <SettingsIcon />
      <Typography variant="h5">Settings</Typography>
    </div>
  );
}
