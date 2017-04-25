import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "../actions/users"

const INITIAL_STATE = {
  user: null,
  status: null,
  error: null,
  loading: false
}

const UserReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP_USER:
      return Object.assign({}, state, {
        status: "signup",
        loading: true
      })

    case SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload.user,
        status: "authenticated",
        loading: false
      })

    case SIGNUP_USER_FAILURE:
      let error = action.payload.data || action.payload.message
      
      console.log("FAILURE REDUCER FUNCTION", action.payload)

      return Object.assign({}, state, {
        status: "signup",
        loading: false,
        error
      })

    default:
      return state;
  }
}

export default UserReducer
