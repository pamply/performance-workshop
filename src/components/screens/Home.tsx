import {
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { AccountBox as AccountBoxIcon } from '@material-ui/icons';
import './home.css';

import React, { useState, useEffect } from 'react';

const locations = ['d', 'du'];

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [indexSelected, setIndexSelected] = useState(-1);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    setValue(locations[indexSelected]);
    setOpenList(false);
  }, [indexSelected]);

  return (
    <div className="autocomplete-container">
      <TextField
        className={'autocomplete-textfield'}
        id="filled-secondary"
        label="Seleccione domicilio"
        variant={'standard'}
        value={value}
        placeholder={'Seleccione domicilio...'}
        onFocus={() => {
          setOpenList(true);
        }}
        onChange={(event) => {
          setOpenList(true);
          setValue(event.target.value);
        }}
      />
      {openList && (
        <List>
          {locations.map((location, index) => (
            <ListItem
              onClick={() => {
                setIndexSelected(index);
                setOpenList(false);
              }}
              button
              key={location}
            >
              <ListItemText primary={location} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <AccountBoxIcon fontSize={'inherit'} />
        <Typography variant="h3">Home</Typography>
      </div>
      <Autocomplete />
    </div>
  );
}
