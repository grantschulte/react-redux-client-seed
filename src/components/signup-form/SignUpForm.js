import React, { Component } from "react"
import { reduxForm, Field, SubmissionError } from "redux-form"
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
      console.log("SIGNUP PROMISE RESULT", result)
      let { data, response } = result.payload

      if (response && response.status !== 200) {
        dispatch(signupUserFailure(response.data))
        throw new SubmissionError(response.data)
      }

      localStorage.setItem("jwt", data.token)
      dispatch(signupUserSuccess(data))
    })
    .catch(error => {
      console.log("SIGNUP PROMISE CATCH ERROR", error)
      dispatch(signupUserFailure(error))
      throw new SubmissionError(error)
    })
}

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    console.log("SIGNUP COMPONENT PROPS", props)
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT PROPS", nextProps)
    console.log("THIS.PROPS", this.props)
    // if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
    //   this.context.router.push('/profile');
    // }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(validateAndSignUpUser) } className="form form--signup-form">
        <div className="form__form-error text-center">Server errors go here.</div>

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
