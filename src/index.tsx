import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/core/Layout';
import { withLazyScreen } from './components/screens/LazyScreen';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={withLazyScreen('Home')} />
          <Route path="/settings" component={withLazyScreen('Settings')} />
          <Route path="/profile" component={withLazyScreen('Profile')} />
          <Route
            path="/restaurant-list"
            component={withLazyScreen('RestaurantList')}
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
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
