import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return <div>This is the Home component. Your boilerplate works!</div>;
  }
}

export default connect()(Home);
