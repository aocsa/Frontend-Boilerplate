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
                <Link to="/">Defunct link</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Navbar);
