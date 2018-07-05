import {combineReducers} from 'redux';
import LoggedOut from './loggedOut';
import {nav} from './navigation';

export default combineReducers({
  LoggedOut,
  nav
})
