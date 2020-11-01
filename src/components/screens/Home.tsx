import {
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { AccountBox as AccountBoxIcon } from '@material-ui/icons';
import { QueryRenderer, graphql } from 'react-relay';
import './home.css';
import environment from '../../api/setup';

import React, { useState } from 'react';

const locationListquery = graphql`
  query HomeQuery($input: String) {
    locations(input: $input) {
      name
    }
  }
`;

interface Location {
  name: string;
}

interface RenderProps {
  error: Error;
  props?: {
    locations: Location[];
  };
}

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [openList, setOpenList] = useState(false);
  const history = useHistory();
  function selectItem(value: string) {
    return () => {
      setValue(value);
      setOpenList(false);
      setTimeout(() => {
        history.push('/restaurant-list');
      });
    };
  }
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
        <QueryRenderer
          environment={environment}
          variables={{
            input: value,
          }}
          query={locationListquery}
          render={({ error, props }: RenderProps) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return null;
            }
            return (
              <List>
                {props.locations.map((location) => (
                  <ListItem
                    onClick={selectItem(location.name)}
                    button
                    key={location.name}
                  >
                    <ListItemText primary={location.name} />
                  </ListItem>
                ))}
              </List>
            );
          }}
        />
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
