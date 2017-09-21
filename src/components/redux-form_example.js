/*

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const FIELDS = {
  name: {
    type: 'input',
    label: 'First Name',
    error: 'Please enter your first name',
    minLength: 2,
  },
  surname: {
    type: 'input',
    label: 'Last Name',
    error: 'Please enter your last name',
    minLength: 2,
  },
  email: {
    type: 'input',
    label: 'Email Address',
    error: 'Please enter your email',
    minLength: 6,
  },
  emailConfirm: {
    type: 'input',
    label: 'Email Address Again',
    error: "Emails don't match",
    minLength: 6,
  },
  password: {
    type: 'input',
    label: 'Password',
    error: 'Please choose a password of at least 6 characters',
    minLength: 6,
  },
  passwordConfirm: {
    type: 'input',
    label: 'Password Again',
    error: "Passwords don't match",
    minLength: 6,
  },
  bio: {
    type: 'textarea',
    label: 'About yourself.. ',
    error: 'Please tell us about yourself',
    minLength: 10,
  },
};

class UserForm extends Component {
  onSubmit = (values) => {
    this.props.history.push('/');
  };

  renderField = (field) => {
    const { input, input: { name }, meta: { touched, error } } = field;

    const Input = FIELDS[name].type; // make fields dynamic!

    const inputClassName =
      touched && ((error && 'form-group has-danger') || 'form-group has-success'); // div style, normal, error, or warning

    const inputType = ((name === 'password' || name === 'passwordConfirm') && 'password') || 'text';

    return (
      <div className={inputClassName}>
        <label htmlFor={name}>
          {FIELDS[name].label}
        </label>
        <Input className="form-control" type={inputType} {...input} />
        <div className="text-help small">
          {touched && (error && `${error}`)}
        </div>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="user-form">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderField} />
          <Field name="surname" component={this.renderField} />
          <Field name="email" component={this.renderField} />
          <Field name="emailConfirm" component={this.renderField} />
          <Field name="password" component={this.renderField} />
          <Field name="passwordConfirm" component={this.renderField} />
          <Field name="bio" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/user" className="btn btn-danger pull-right">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = Object.keys(FIELDS).reduce((accumulator, field) => {
    if (values[field] === 'passwordConfirm' && values[field] !== values.password) {
      accumulator[field] = FIELDS[field].error;
    } else if (values[field] === 'emailConfirm' && values[field] !== values.email) {
      accumulator[field] = FIELDS[field].error;
    } else {
      !values[field] || values[field].length < FIELDS[field].minLength
        ? (accumulator[field] = FIELDS[field].error)
        : null;
    }
    return accumulator;
  }, {});
  return errors;
};

// Add yellow text for warn in renderField 
const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const mapStateToProps = state => ({ ...state });

export default reduxForm({
  form: 'UserForm',
  validate,
  warn,
  fields: Object.keys(FIELDS),
})(connect(mapStateToProps)(UserForm));

Ä/
