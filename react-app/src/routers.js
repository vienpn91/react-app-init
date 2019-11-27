import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from './containers/MainLayout';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ForgotPassword from './containers/ForgotPassword';
import Dashboard from './containers/Dashboard';
import PaymentPage from './containers/PaymentPage';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/payment" component={PaymentPage} />

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
