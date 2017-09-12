import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return <div>This is the Home component. Your boilerplate works.</div>;
  }
}

// test
export default connect()(Home);

// The '/' route as seen on page load. Did not make it a pure functional component because you will need to add stuff here.
