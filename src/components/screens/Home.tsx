import { Typography, TextField } from '@material-ui/core';
import { AccountBox as AccountBoxIcon } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import './home.css';

import React from 'react';
export function Home() {
  const locations = [
    {
      country: {
        cities: ['Merida'],
      },
    },
  ];
  return (
    <div className="home-container">
      <div className="header">
        <AccountBoxIcon fontSize={'inherit'} />
        <Typography variant="h3">Home</Typography>
      </div>
      <Autocomplete
        id="autocomplete-texfield"
        className="autocomplete-texfield"
        freeSolo
        options={locations[0].country.cities}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            margin="none"
            variant="standard"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
        renderOption={(option) => (
          <Typography
            onClick={() => {
              console.log('option', option);
            }}
            noWrap
          >
            {option}
          </Typography>
        )}
      />
    </div>
  );
}
