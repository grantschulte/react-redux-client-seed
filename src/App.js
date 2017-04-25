import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Header from "./components/header/Header"
import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/signup/SignUpPage"
import SignInPage from "./pages/signin/SignInPage"
import ProfilePage from "./pages/profile/ProfilePage"
import configureStore from "./store"

const store = configureStore()

const App = () => (
  <Provider store={store}>
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
  </Provider>
)

export default App
