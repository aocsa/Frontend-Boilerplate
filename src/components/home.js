import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const test = async () => {
      await setTimeout(() => {
        console.log('works');
      }, 10);
    };
    test();
    return <div>This is the Home component. Your boilerplate works </div>;
  }
}

// test
export default connect()(Home);

// The '/' route as seen on page load. Did not make it a pure functional component because you will need to add stuff here.
