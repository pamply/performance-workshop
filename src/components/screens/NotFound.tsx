import { Typography } from '@material-ui/core';
import './not-found.css';

import React from 'react';
export function NotFound() {
  return (
    <div className="notfound-container">
      <div className="header">
        <Typography variant="h3">404 Not found</Typography>
      </div>
      <img src="https://image.flaticon.com/icons/png/512/76/76824.png" />
    </div>
  );
}
