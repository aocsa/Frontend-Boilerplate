import jsdom from 'jsdom'; // like karma! fake browser, fake news.
import jquery from 'jquery'; // access elements on the fake dom

import TestUtils from 'react-dom/test-utils'; // react test rendering
import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import chai, { expect } from 'chai'; // chai expect and chai
import chaiJquery from 'chai-jquery'; // chai jQuery
import mexpect from 'expect'; // mjackson expect

import store, { configure } from '../src/store';

// /// set up test helper to run like a browser in the command line ////////
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView; // equate global.window to fake dom
const $ = jquery(global.window); // Tell $ to use our fake dom, not real one.
// ////////////////////////////////////////////////////////////////////////////

// //// build renderComponent helper to render a React class  //////////////////
const renderComponent = (ComponentClass, componentProps, reduxStoreState) => {
  // create store. Do this in reducers/index for your own projects, just import Store!
  const newStore = configure(reduxStoreState);
  // render Component, wrapped with Provider, and wrapped with Router
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={newStore}>
      <MemoryRouter>
        <ComponentClass {...componentProps} />
      </MemoryRouter>
    </Provider>,
  );
  return $(ReactDOM.findDOMNode(componentInstance)); // produces the HTML, then wrap in $
};
// ////////////////////////////////////////////////////////////////////////////

// build helper for simulating events //////////////////////
$.fn.simulate = function (eventName, value) {
  if (value) this.val(value); // cant use () => {} due to this keyword
  // refer to mapped function via object[eventName] , ont he first element it finds
  TestUtils.Simulate[eventName](this[0]);
};
// ////////////////////////////////////////////////////////////

// /// FINALLY SET UP CHAI-JQUERY! ///////////////////////////////////
chaiJquery(chai, chai.util, $);
// ////////////////////////////////////////////////////////

// EXPORT renderComponent and all assertion libraries you wish to use

export { renderComponent, expect, mexpect };
