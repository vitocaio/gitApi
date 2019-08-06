import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './styles/global';

import configureStore from './store';
import theme from './styles';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
