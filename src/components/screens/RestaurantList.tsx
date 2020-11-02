import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { QueryRenderer, graphql } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';

import './restaurant-list.css';
import { SkeletonLoader } from '../core/SkeletonLoader';

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

const queryRestaurantList = graphql`
  query RestaurantListQuery {
    restaurants {
      id
      name
      description
      imageURL
    }
  }
`;

export default function RestaurantList() {
  const environment = useRelayEnvironment();
  return (
    <div className="restaurant-list-container">
      <QueryRenderer
        environment={environment}
        variables={{}}
        query={queryRestaurantList}
        render={({ error, props }: RenderProps) => {
          if (error) {
            return <div>Error</div>;
          }
          if (!props) {
            return <SkeletonLoader />;
          }
          return props.restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ));
        }}
      />
    </div>
  );
}
