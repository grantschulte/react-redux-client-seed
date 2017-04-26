import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import SignUpForm from "../components/signup-form/SignUpForm"

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const SignUpFormContainer = withRouter(connect(
  mapStateToProps
)(SignUpForm))

export default SignUpFormContainer
