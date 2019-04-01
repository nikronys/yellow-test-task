import 'reset-css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './resources/store';
import {Router} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import history from './utils/history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>, 
  document.getElementById('app')
);
