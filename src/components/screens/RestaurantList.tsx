import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import './restaurant-list.css';

import React from 'react';

enum Category {
  SEAFOOD = 'Seafood',
  CHINESE = 'Chinese',
  JAPANESE = 'Japanese',
  MEXICAN = 'Mexican',
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  categories: Category[];
}

interface RenderProps {
  error: Error;
  props?: {
    restaurants: Restaurant[];
  };
}

const RestaurantItem = ({ restaurant }: { restaurant: Restaurant }) => {
  const history = useHistory();
  const { name, description, imageURL, id } = restaurant;
  return (
    <div className="restaurant-element">
      <Card className={'restaurant-element-card'}>
        <CardMedia image={imageURL} className="restaurant-element-img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => history.push(`/menu/${id}`)}
            size="small"
            color="primary"
          >
            Go to restaurant
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default function RestaurantList({ data }) {
  return (
    <div className="restaurant-list-container">
      {data.restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
