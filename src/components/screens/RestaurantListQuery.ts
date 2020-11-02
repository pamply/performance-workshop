import { graphql } from 'react-relay';

export const queryRestaurantList = graphql`
  query RestaurantListQuery {
    restaurants {
      id
      name
      description
      imageURL
    }
  }
`;
