import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'emotion/react';

const Wrapper = styled.section`
  background: ${props => (props.blue ? 'blue' : 'transparent')};
  padding: 0px 5px;
`;

const StyledDiv = styled.div`
  border: 1px solid pink;
  font: bold normal 2em/1.2 Arial, sans-serif;
  margin: 10px 5px 10px 5px;
  background: transparent;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <StyledDiv> This is the Home component. Your boilerplate works.</StyledDiv>
      </Wrapper>
    );
  }
}

export default connect()(Home);

// The '/' route as seen on page load. Did not make it a pure functional component because you will need to add stuff here.
