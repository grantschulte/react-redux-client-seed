import { connect } from "react-redux"
import SignUpForm from "../components/signup-form/SignUpForm"

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error
  }
}

const SignUpFormContainer = connect(
  mapStateToProps
)(SignUpForm)

export default SignUpFormContainer
