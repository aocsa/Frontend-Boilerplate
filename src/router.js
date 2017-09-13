import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'emotion/react';

// import components. to use route splotting, create new Async components by wrapping them with loadable.

/* eslint-disable*/
import Navbar from 'Navbar';
import Home from 'Home';
import Footer from 'Footer';
import LoadingPage from './components/loading';
/* eslint-enable*/

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ 'Home'),
  loading: LoadingPage,
  delay: 300,
});

const AsyncNavbar = Loadable({
  loader: () => import(/* webpackChunkName: 'navbar' */ 'Navbar'),
  loading: LoadingPage,
  delay: 300,
});

const AsyncFooter = Loadable({
  loader: () => import(/* webpackChunkName: 'footer' */ 'Footer'),
  loading: LoadingPage,
  delay: 300,
});

const BodyPadding = styled.div`padding: 0.5em 0.5em 0.5em 0.5em;`;

// the no match component is for mismatched/non-existing routes.
const NoMatch = ({ location }) => (
  <BodyPadding>
    <h3>
      <code>{location.pathname}</code> does not exist.
    </h3>
  </BodyPadding>
);

// We want the navbar and the footer to be on every page, feel free to change it depending on your design.

// exact path / stays ON TOP inside switch. Add new paths beneath / and above the no match route, more specialized route should be higher up. Or else /users/:id will route to /users if /users is higher up!

const Router = () => (
  <BrowserRouter>
    <div>
      <Route component={AsyncNavbar} />
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Route component={AsyncFooter} />
    </div>
  </BrowserRouter>
);

export default Router;
