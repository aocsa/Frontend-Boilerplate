import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'Router';
import store from 'Store';
import 'Styles';

export const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
