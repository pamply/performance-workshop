import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import './menu.css';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../api/setup';
import { useRouteMatch } from 'react-router-dom';

import React from 'react';

interface Product {
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

interface MenuItemProps {
  product: Product;
}

const MenuItem = ({ product }: MenuItemProps) => {
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
      </Card>
    </div>
  );
};

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
  const match = useRouteMatch();
  const variables = match.params;

  return (
    <div className="menu-container">
      <QueryRenderer
        environment={environment}
        query={queryMenu}
        variables={variables}
        render={({ error, props }: RenderProps) => {
          if (error) {
            return <div>Error</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }

          return props.menu.products.map((product) => (
            <MenuItem key={product.name} product={product} />
          ));
        }}
      />
    </div>
  );
}
