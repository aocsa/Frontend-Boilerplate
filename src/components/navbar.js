import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'emotion/react';

const GradientDiv = styled.div`
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
`;

const NavbarFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fluid">
        <GradientDiv>
          <NavbarFlexContainer>
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                Frontend Boilerplate
              </Link>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/doesNotExist">Link to non-existing route</Link>
                </li>
              </ul>
            </div>
          </NavbarFlexContainer>
        </GradientDiv>
      </nav>
    );
  }
}

export default connect()(Navbar);

// A basic navbar component with bootstrap classes. You may pick your own css library.
// Use <Link /> to link to routes within <Switch />
// The use of <Link /> requires some testing setup for tests to access router context, that's why we wrapped our Test component with <MemoryRouter>

// This component is a container (connected to redux, and has functionality other than just displaying things) because we need some Navbar links and buttons to behave differently depending on data in Store. Such as authentication.
