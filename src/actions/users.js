import axios from "axios"

export const SIGNUP_USER = "SIGNUP_USER"
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS"
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE"

export const ME_FROM_TOKEN = "ME_FROM_TOKEN"
export const ME_FROM_TOKEN_SUCCESS = "ME_FROM_TOKEN_SUCCESS"
export const ME_FROM_TOKEN_FAILURE = "ME_FROM_TOKEN_FAILURE"

export const RESET_TOKEN = "RESET_TOKEN"

const API_URL = process.env.REACT_APP_API_URL

function signupUser(formData) {
  let url = `${API_URL}/users/signup`
  let request = axios.post(url, formData)

  return {
    type: SIGNUP_USER,
    payload: request
  }
}

function signupUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  }
}

function signupUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  }
}

function meFromToken(token) {
  const request = axios({
    method: "get",
    url: `${API_URL}/users/me/from/token?token=${token}`,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return {
    type: ME_FROM_TOKEN,
    payload: request
  }
}

function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}

function resetToken() {
  return {
    type: RESET_TOKEN
  };
}

export {
  signupUser,
  signupUserSuccess,
  signupUserFailure,
  meFromToken,
  meFromTokenSuccess,
  meFromTokenFailure,
  resetToken
}
