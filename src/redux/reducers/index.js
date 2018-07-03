import {combineReducers} from 'redux';
import LoggedOut from './loggedOut';
import * as Navigation from './navigation';

export default combineReducers({
  LoggedOut,
  Navigation
})
