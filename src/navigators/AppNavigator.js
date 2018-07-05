import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import LogIn from '../screens/logIn';
import LoggedOut from '../screens/loggedOut';
import ForgotPassword from '../screens/forgotPassword';
import LoggedIn from '../screens/loggedIn';
import TurnOnNotifications from '../screens/turnOnNotifications';

export const AppNavigator = StackNavigator({
    LogIn: {screen: LogIn},
    LoggedOut: {screen: LoggedOut},
    ForgotPassword: {screen: ForgotPassword},
    LoggedIn: {screen: LoggedIn},
    TurnOnNotifications: {screen: TurnOnNotifications}
})

const AppNavigatorWithState = ({dispatch, nav, listener}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav, addListener: listener})} />
)

AppNavigatorWithState.propTypes = {
    dispatch: propTypes.func.isRequired,
    nav: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppNavigatorWithState);