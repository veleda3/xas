import React from 'react';
import LoggedInTabNavigator from '../navigators/loggedInTabNavigator';
import TransparentHeaderStyle from '../styles/transparentHeaderStyle';

export default class LoggedIn extends React.Component {
    render() {
        return (
            <LoggedInTabNavigator />
        )
    }
}
