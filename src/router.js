import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <div className="container">
      <Route component={Navbar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Route component={Footer} />
    </div>
  </BrowserRouter>
);

export default Router;
