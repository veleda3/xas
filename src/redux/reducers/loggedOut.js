import createReducer from '../helpers';
import * as types from '../actions/types'

export const LoggedOut = createReducer({}, {
  [types.SET_LOGGED_IN_STATE](state, action) {
    return action
  }
})
