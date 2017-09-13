import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'emotion/react';

const Wrapper = styled.section`
  background-color: ${props => (props.blue ? 'blue' : 'transparent')};
`;

const StyledDiv = styled.div`
  border: 1px solid pink;
  font: italic normal 2em/1.2 Arial, sans-serif;
  margin: 10px 5px 10px 5px;
  background-color: transparent;
`;

// const RedStyledDiv = StyledDiv.extend`background: red;`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <StyledDiv> This is the Home component. Your boilerplate works.</StyledDiv>
      </Wrapper>
    );
  }
}

// test
export default connect()(Home);

// The '/' route as seen on page load. Did not make it a pure functional component because you will need to add stuff here.
