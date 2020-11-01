import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/core/Layout';
import { Profile } from './components/screens/Profile';
import { Settings } from './components/screens/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
