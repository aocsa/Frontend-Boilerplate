// ////////////////////////////////////////////////////////
// /////////// Higher Order Component Example ////////////
// //////////////////////////////////////////////////////

// We create a component (functional) that receives a parameter, which is another Component.
// This higher order component connects to Redux, loads some authentication boolean as prop, and redirects to '/' via the history.push('/') passed down by React Router. If not using React Router 4, you need to define router context inside your component. Just something like a default prop, google it.

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuthentication = (PassedComponent) => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      !this.props.authenticated && this.props.history.push('/');
    }
    componentWillReceiveProps(nextProps) {
      !nextProps.authenticated && this.props.history.push('/');
    }
    render() {
      return <PassedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({ authenticated: state.auth.authenticated });
  return connect(mapStateToProps)(RequireAuthentication);
};
export default requireAuthentication;


*/
