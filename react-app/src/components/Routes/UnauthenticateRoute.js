/* eslint-disable react/prefer-stateless-function */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class UnauthenticateRoute extends React.Component {
  render() {
    const {
      authenticated, role,
      callbackUrl,
      component: Component, ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!authenticated) {
            return <Component {...props} authenticated />;
          }

          const toObj = {
            pathname: callbackUrl || '/dashboard',
          };

          return <Redirect to={toObj} />;
        }}
      />
    );
  }
}

UnauthenticateRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.any,
  role: PropTypes.string,
  callbackUrl: PropTypes.string,
};

UnauthenticateRoute.defaultProps = {
  component: () => null,
  role: null,
};
