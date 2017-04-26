import React from "react"
import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"

import Header from "./components/header/Header"
import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/signup/SignUpPage"
import SignInPage from "./pages/signin/SignInPage"
import ProfilePage from "./pages/profile/ProfilePage"
import { history, configureStore } from "./store"

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="view-container">
        <Header />
        <div className="page-container">
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
