import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/core/Layout';
import { Settings } from './components/screens/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/settings" component={Settings} />
        </Switch>
      </Layout>
    </Router>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));