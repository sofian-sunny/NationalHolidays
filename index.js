/**
 * @format
 */

import React from 'react';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/App';

const store = configureStore();

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);

