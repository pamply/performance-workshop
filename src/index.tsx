import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/core/Layout';
import { Profile } from './components/screens/Profile';
import { Settings } from './components/screens/Settings';
import { Home } from './components/screens/Home';
import { RestaurantList } from './components/screens/RestaurantList';
import { NotFound } from './components/screens/NotFound';
import { Menu } from './components/screens/Menu';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurant-list" component={RestaurantList} />
          <Route path="" component={Menu} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
