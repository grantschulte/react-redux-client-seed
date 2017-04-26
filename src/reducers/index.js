import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux"
import UserReducer from "./users"

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  router: routerReducer
})

export default rootReducer
