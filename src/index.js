import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { Route } from 'react-router';
import { history, configureStore } from "./store"

import AppPage from "./pages/app/AppPage";

import "./styles/global.scss";

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppPage}></Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
