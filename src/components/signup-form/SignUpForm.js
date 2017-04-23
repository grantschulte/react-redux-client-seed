import React, { Component } from "react"
import { reduxForm, Field, SubmissionError } from "redux-form"
import {
  signupUser,
  signupUserSuccess,
  signupUserFailure
} from "../../actions/users"
import FormField from "../form-field/FormField"

import "../../styles/forms.scss"
import "./SignUpForm.scss"

/**
 * Validate username and password on input
 */

function validate(values) {
  let errors = {};
  let hasErrors = false;
  let { username, password } = values

  if (!username || username.trim() === "") {
    errors.username = "You must enter a username.";
    hasErrors = true;
  }

  if (!password || password.trim() === "") {
    errors.password = "You must enter a password.";
    hasErrors = true;
  }

  return hasErrors && errors;
}

/**
 * Make user creation request and handle response
 */

function validateAndSignUpUser(values, dispatch) {
  return dispatch(signupUser(values))
    .then(result => {
      console.log("RESULT", result)
      let { data, response } = result.payload

      if (response && response.status !== 200) {
        dispatch(signupUserFailure(response.data))
        throw new SubmissionError(response.data)
      }

      localStorage.setItem("jwt", data.token)
      dispatch(signupUserSuccess(data))
    })
    .catch(error => {
      console.log("ERROR", error)
      dispatch(signupUserFailure(error))
      throw new SubmissionError(error)
    })
}

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(validateAndSignUpUser) } className="signup-form">
        <div className="row">
          <Field component={FormField} name="username" type="text" placeholder="Username" />
        </div>

        <div className="row">
          <Field component={FormField} name="password" type="password" placeholder="Password" />
        </div>

        <div className="row text-center">
          <button type="submit">Create</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "SignUpForm",
  validate
})(SignUpForm)
