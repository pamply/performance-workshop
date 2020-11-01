import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/core/Layout';
import { Profile } from './components/screens/Profile';
import { Settings } from './components/screens/Settings';
import { Home } from './components/screens/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
