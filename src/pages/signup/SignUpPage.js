import React from "react"
import SignUpFormContainer from "../../containers/SignUpFormContainer"
import PageHeading from "../../components/page-heading/PageHeading"
import "./SignUpPage.scss"

const SignUpPage = () => (
  <div className="signup-page">
    <PageHeading text="Create" icon="ion-person" />
    <SignUpFormContainer />
  </div>
)

export default SignUpPage
