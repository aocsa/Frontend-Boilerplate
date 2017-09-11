import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const testMethod = async () => {
      await setTimeout(() => {
        console.log('works after 5 secs');
      }, 5000);
    };

    testMethod();
    return <div>This is the Home component. Your boilerplate works </div>;
  }
}

export default connect()(Home);

// The '/' route as seen on page load. Did not make it a pure functional component because you will need to add stuff here.
