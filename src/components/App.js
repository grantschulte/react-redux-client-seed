import React, { Component } from "react"
import { Route } from 'react-router';

import Header from "./header/Header"
import HomePage from "../pages/home/HomePage"
import SignUpPage from "../pages/signup/SignUpPage"
import SignInPage from "../pages/signin/SignInPage"
import ProfilePage from "../pages/profile/ProfilePage"

class AppComponent extends Component {
  componentWillMount() {
    this.props.loadUserFromToken()
  }

  render() {
    return (
      <div className="view-container">
        <Header />
        <div className="page-container">
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </div>
    )
  }
}

export default AppComponent
