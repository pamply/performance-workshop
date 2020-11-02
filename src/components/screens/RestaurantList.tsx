import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { QueryRenderer, graphql } from 'react-relay';
import './restaurant-list.css';
import { SkeletonLoader } from '../core/SkeletonLoader';

import React from 'react';
import environment from '../../api/setup';

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
  const [showItem, setShowItem] = React.useState(false);
  const containerRef = React.useRef();
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setShowItem(true);
      }
    });
  };
  const options: IntersectionObserverInit = {
    threshold: 1.0,
  };

  const history = useHistory();
  const observer = React.useRef(
    new IntersectionObserver(observerCallback, options)
  );

  React.useLayoutEffect(() => {
    let targetToUnobserve = null;
    if (containerRef.current) {
      observer.current.observe(containerRef.current);
      targetToUnobserve = containerRef.current;
    }
    return () => {
      observer.current.unobserve(targetToUnobserve);
    };
  }, [observer, containerRef]);
  const { name, description, imageURL, id } = restaurant;
  return (
    <div className="restaurant-element" ref={containerRef}>
      {showItem && (
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
      )}
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

export function RestaurantList() {
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
