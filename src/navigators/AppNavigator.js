import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux'
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import LoggedOut from '../screens/loggedOut';
import LogIn from '../screens/logIn';
import ForgotPassword from '../screens/forgotPassword';



export const AppNavigator = StackNavigator({
  LoggedOut: {screen: LoggedOut},
  LogIn: {screen: LogIn},
  ForgotPassword: {screen: ForgotPassword}
})

export const AppWithNavigationState = ({dispath, nav, listener, middleware}) => {
  <AppNavigator navigation={addNavigationHelpers({ dispath, state: nav, addListener: listener })} />
}

AppNavigator.propTypes = {
  dispath: propTypes.func.isRequired,
  nav: propTypes.object.isRequired
}

const mapStateToProps = ({nav}) => ({
    nav
  })

export default connect(mapStateToProps)(AppWithNavigationState)
