/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import Routes from './routers';
import configureStore from './store/configureStore';
import { DefaultThemes } from './stylesheets/themes/DefaultThemes.style';
import GlobalStyle from './global-styles';
import 'antd/dist/antd.css';

export const { store, persistor } = configureStore({}, history);

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={DefaultThemes}>
            <PersistGate loading={null} persistor={persistor}>
              <ConnectedRouter history={history}>
                <Routes history={history} />
              </ConnectedRouter>
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}
