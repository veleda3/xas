import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.SET_LOGGED_IN_STATE:
      return { loggedInStatus: action.payload }
    default:
      return { loggedInStatus: null };
  }
}
