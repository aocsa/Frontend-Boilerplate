import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

const Router = () => (
  <BrowserRouter>
    <div className="container">
      <Route component={Navbar} />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={() => <h1>Not found</h1>} />
      </Switch>
      <Route component={Footer} />
    </div>
  </BrowserRouter>
);

export default Router;
