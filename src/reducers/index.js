import { combineReducers } from "redux"
import { reducer as form } from "redux-form";
import { routerReducer as router } from "react-router-redux"
import { userReducer as user } from "./users"

const rootReducer = combineReducers({
  form, user, router
})

export default rootReducer
