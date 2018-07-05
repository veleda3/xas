import React from 'react';
import {Provider} from 'react-redux';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import store from './src/redux/store'
import LoggedOut from './src/screens/loggedOut';
import LogIn from './src/screens/logIn';
import ForgotPassword from './src/screens/forgotPassword'
import AppWithNavigationState from './src/navigators/AppNavigator';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState listener={createReduxBoundAddListener('root')} />
      </Provider>
    )
  }
}
