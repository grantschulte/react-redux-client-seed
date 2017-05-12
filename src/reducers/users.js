import {
  SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
  ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN
} from "../actions/users"

const INITIAL_STATE = {
  user: null,
  status: null,
  error: null,
  loading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  let error;

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
      error = action.payload.errors || 'There was an error with your submission.';

      return Object.assign({}, state, {
        status: "signup",
        loading: false,
        error
      })

    case ME_FROM_TOKEN:
      return Object.assign({}, state, {
        status: "storage",
        loading: true
      })

    case ME_FROM_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload.data.user,
        status: "authenticated",
        loading: false
      })

    case ME_FROM_TOKEN_FAILURE:
      error = action.payload.errors || { message: action.payload.message }

      return Object.assign({}, state, {
        user: null,
        status: "storage",
        loading: false,
        error
      })

    case RESET_TOKEN:
      return Object.assign({}, state, {
        user: null,
        status: "storage",
        loading: false,
        error: null
      })

    default:
      return state
  }
}

export { userReducer }
