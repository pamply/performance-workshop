import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import './menu.css';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../api/setup';
import { useRouteMatch } from 'react-router-dom';
import { SkeletonLoader } from '../core/SkeletonLoader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import React from 'react';

interface Product {
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

interface MenuItemProps {
  product: Product;
  addItem: any;
}

const MenuItem = React.memo(({ product, addItem }: MenuItemProps) => {
  const { imageURL, name, description } = product;

  return (
    <div className="menu-element">
      <Card className={'menu-element-card'}>
        <CardMedia image={imageURL} className="menu-element-img" />
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
            onClick={() =>
              addItem((prevTotal) => {
                return prevTotal + 1;
              })
            }
            size="small"
            color="primary"
          >
            Add item
          </Button>
        </CardActions>
      </Card>
    </div>
  );
});

MenuItem.displayName = 'MenuItem';

interface Menu {
  products: [Product];
  restaurantID: string;
}

interface RenderProps {
  error: Error;
  props: {
    menu: Menu;
  };
}

const queryMenu = graphql`
  query MenuQuery($restaurantID: ID) {
    menu(restaurantID: $restaurantID) {
      restaurantID
      products {
        name
        description
        price
        imageURL
      }
    }
  }
`;

export function Menu() {
  const [total, setTotal] = React.useState(0);
  const match = useRouteMatch();
  const variables = match.params;

  return (
    <div className="menu-container">
      <div className="menu-container-total">
        <ShoppingCartIcon />
        <Typography>{`(${total})`}</Typography>
      </div>
      <QueryRenderer
        environment={environment}
        query={queryMenu}
        variables={variables}
        render={({ error, props }: RenderProps) => {
          if (error) {
            return <div>Error</div>;
          }
          if (!props) {
            return <SkeletonLoader />;
          }

          return props.menu.products.map((product) => (
            <MenuItem key={product.name} product={product} addItem={setTotal} />
          ));
        }}
      />
    </div>
  );
}
