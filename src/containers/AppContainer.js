import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users'
import AppComponent from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken() {
      let token = localStorage.getItem('jwt');

      if (!token || token === '') { return }

      dispatch(meFromToken(token))
        .then(response => {
          if (!response.error) {
            localStorage.setItem('jwt', response.payload.data.token)
            dispatch(meFromTokenSuccess(response.payload))
          } else {
            localStorage.removeItem('jwt')
            dispatch(meFromTokenFailure(response.payload))
          }
        })
        .catch(error => {
          dispatch(meFromTokenFailure(error))
        });
    },

    logout() {
      localStorage.removeItem('jwt')
      dispatch(resetToken())
    }
  }
}

const AppContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(AppComponent))

export default AppContainer
