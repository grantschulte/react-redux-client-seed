import React from "react"
import PageHeading from "../../components/page-heading/PageHeading"
import "../../styles/forms.scss"
import "./SignUpPage.scss"

const SignUpPage = () => (
  <div className="signup-page">
    <PageHeading text="Create" icon="ion-person" />

    <form className="signup-form">
      <div className="row">
        <input type="text" placeholder="Username" />
      </div>

      <div className="row">
        <input type="password" placeholder="Password" />
      </div>

      <div className="row text-center">
        <button>Create</button>
      </div>
    </form>
  </div>
)

export default SignUpPage
