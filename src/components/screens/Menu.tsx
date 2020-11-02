import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './menu.css';
import { QueryRenderer, graphql } from 'react-relay';
import { useRouteMatch } from 'react-router-dom';
import { SkeletonLoader } from '../core/SkeletonLoader';
import { useRelayEnvironment } from 'react-relay/hooks';

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

export default function Menu() {
  const match = useRouteMatch();
  const variables = match.params;
  const environment = useRelayEnvironment();
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
            return <SkeletonLoader />;
          }

          return props.menu.products.map((product) => (
            <MenuItem key={product.name} product={product} />
          ));
        }}
      />
    </div>
  );
}
