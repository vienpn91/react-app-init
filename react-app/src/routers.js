import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';

import AuthenticatedRoute from './containers/Routes/AuthenticatedRoute';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <MainLayout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </MainLayout>
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Router);
