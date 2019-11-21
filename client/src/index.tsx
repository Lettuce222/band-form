import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './styles/semantic.min.css';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
