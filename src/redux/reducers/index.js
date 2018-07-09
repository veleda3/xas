import {combineReducers} from 'redux';
import LoggedOut from './loggedOut';
import {nav} from './navigation';
import auth from './oAuth';

export default combineReducers({
  LoggedOut,
  auth,
  nav
})
