import axios from "axios"

export const SIGNUP_USER = "SIGNUP_USER"
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS"
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE"

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

export {
  signupUser,
  signupUserSuccess,
  signupUserFailure
}
