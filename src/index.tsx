import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Layout } from './components/core/Layout';
import {
  withLazyScreen,
  useRenderAsYouFetch,
} from './components/screens/LazyScreen';
import { queryRestaurantList } from './components/screens/RestaurantListQuery';
import environment from './api/setup';

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={withLazyScreen('Home')} />
            <Route path="/settings" component={withLazyScreen('Settings')} />
            <Route path="/profile" component={withLazyScreen('Profile')} />
            <Route
              path="/restaurant-list"
              component={useRenderAsYouFetch(
                'RestaurantList',
                queryRestaurantList
              )}
            />
            <Route
              path="/menu/:restaurantID"
              sensitive
              component={withLazyScreen('Menu')}
            />
            <Route path="*" component={withLazyScreen('NotFound')} />
          </Switch>
        </Layout>
      </Router>
    </RelayEnvironmentProvider>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
