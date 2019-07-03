import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/pages/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
