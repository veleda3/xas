import * as types from './types';


export function LogIn(email, password) {
  return (dispatch, getState) => {
    if(email === user.email) {
      dispatch(setLoggedInState(true))
      return true
    }
    dispatch(setLoggedInState(false))
      return false
  }
}

export function setLoggedInState(loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    action: loggedInState
  }
}
