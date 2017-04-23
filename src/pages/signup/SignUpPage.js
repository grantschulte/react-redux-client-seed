import React from "react"
import SignUpForm from "../../components/signup-form/SignUpForm"
import PageHeading from "../../components/page-heading/PageHeading"
import "./SignUpPage.scss"

const SignUpPage = () => (
  <div className="signup-page">
    <PageHeading text="Create" icon="ion-person" />
    <SignUpForm />
  </div>
)

export default SignUpPage
