import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class ReduxFormExample extends Component {
  constructor(props) {
    super(props);
  }

  // This `field` is the field object passed by <Field />
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        {touched && error && <span className="text-help">{error}</span>}
      </div>
    );
  }

  submit1(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

    // If we want to use the props submitCallBack, then we need do handleSubmit(callBack)
    // <form onSubmit={handleSubmit(this.submit1.bind(this))}>
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            label="title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="categories"
            name="cat"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

function validate(values) {
  const errors = {};
  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.cat) {
    errors.cat = "Enter a category!";
  }

  // If errors is empty, the form is fine to Submit
  // If errors has any properties, redux form assuems form is invalid
  return errors;
}

function submit2(values) {
  alert("title: " + values.title + " cats: " + values.cat);
}

export default reduxForm({
  form: 'ReduxExample',
  validate,
  onSubmit: submit2 // If we pass a callBack function to handleSubmit(...), then we dont need to declare this onSubmit
})(
  connect(null, { createPost })(ReduxFormExample)
);
