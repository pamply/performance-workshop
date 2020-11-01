import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import './menu.css';

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

const menu: Menu = {
  products: [
    {
      name: 'Taco de Labio',
      description:
        'Taco de labio con tortilla a elección, salsa roja, martajada, verde sin picante y mexicana con guacamole, frijoles y cebollas guisadas.',
      price: 26,
      imageURL:
        'https://images.rappi.com.mx/products/978532747-1598533763088.png?d=128x90&e=webp',
    },
  ],
  restaurantID: 'taco-loco',
};

export function Menu() {
  return (
    <div className="menu-container">
      {menu.products.map((product) => (
        <MenuItem key={product.name} product={product} />
      ))}
    </div>
  );
}
