import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../../components/header/Header"
import HomePage from "../home/HomePage"
import SignUpPage from "../signup/SignUpPage"
import SignInPage from "../signin/SignInPage"
import ProfilePage from "../profile/ProfilePage"

import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div className="view-container">
      <Header />
      <div className="page-container">
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    </div>
  </BrowserRouter>
)

export default App
