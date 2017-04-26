import { createStore, applyMiddleware, compose } from "redux"
import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "react-router-redux"
import promise from "redux-promise"
import rootReducer from "./reducers/index"

const history = createHistory()

function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers")
      store.replaceReducer(nextReducer)
    });
  }

  return store
}

export { history, configureStore }
