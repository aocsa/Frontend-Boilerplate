import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import './styles/styles.css'; // TODO: HAVE TO COMMENT THIS OUT FOR TESTS TO WORK, FIND HOW TO USE BABEL IGNORE AND IGNORE CSS IMPORT FOR MOCHA !!

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
