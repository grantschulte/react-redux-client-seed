import React from "react"
import PageHeading from "../../components/page-heading/PageHeading"
import "./SignInPage.scss"

const SignInPage = () => (
  <div className="signin-page">
    <PageHeading text="Access" icon="ion-unlocked" />

    <form className="form form--signin-form">
      <div className="form__row">
        <input type="text" placeholder="Username" />
      </div>

      <div className="form__row">
        <input type="password" placeholder="Password" />
      </div>

      <div className="form__row text-center">
        <button>Access</button>
      </div>
    </form>
  </div>
)

export default SignInPage
