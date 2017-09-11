import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fluid">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/doesNotExist">Defunct link</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Navbar);

// A basic navbar component with bootstrap classes. You may pick your own css library.
// Use <Link /> to link to routes within <Switch />
// The use of <Link /> requires some testing setup for tests to access router context, that's why we wrapped our Test component with <MemoryRouter>

// This component is a container (connected to redux) because we need some Navbar links and buttons to behave differently depending on data in Store. Such as authentication.
