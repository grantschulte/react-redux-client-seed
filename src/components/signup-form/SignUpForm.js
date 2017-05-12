import React, { Component } from "react"
import { reduxForm, Field, SubmissionError } from "redux-form"
import { push } from "react-router-redux"
import {
  signupUser,
  signupUserSuccess,
  signupUserFailure
} from "../../actions/users"
import FormField from "../form-field/FormField"
import validate from "./form-validation"
import "../../styles/forms.scss"
import "./SignUpForm.scss"

/**
 * Make user creation request and handle response
 */

function validateAndSignUpUser(values, dispatch) {
  return dispatch(signupUser(values))
    .then(result => {
      let { data, response } = result.payload

      if (response && response.status !== 200) {
        dispatch(signupUserFailure(response.data))
        throw new SubmissionError(response.data.message)
      }

      localStorage.setItem("jwt", data.token)
      dispatch(signupUserSuccess(data))
    })
    .catch(error => {
      dispatch(signupUserFailure(error))
      throw new SubmissionError(error)
    })
}

class SignUpForm extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('SUP PRE', nextProps);
    console.log(nextProps.user.status === 'authenticated');
    console.log(nextProps.user.user);
    console.log(!nextProps.user.error);
    if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      console.log('SUP NEXT', nextProps);
      nextProps.dispatch(push("/profile"))
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const formError = this.props.user.error;

    return (
      <form onSubmit={ handleSubmit(validateAndSignUpUser) } className="form form--signup-form">

        {formError &&
          <div className="form__form-error text-center">{formError}</div>
        }

        <div className="form__row">
          <Field component={FormField} name="username" type="text" placeholder="Username" />
        </div>

        <div className="form__row">
          <Field component={FormField} name="password" type="password" placeholder="Password" />
        </div>

        <div className="form__row text-center">
          <button className="form__btn btn btn--full" type="submit">Create</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "SignUpForm",
  validate
})(SignUpForm)
