import React from 'react';
import LoggedInTabNavigator from '../navigators/loggedInTabNavigator';
import {transparentHeaderStyle} from '../styles/transparentHeaderStyle';
import {StatusBar} from 'react-native';

export default class LoggedIn extends React.Component {
    static navigationOptions = ({
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        gestureEnable: false,
     }) 

    constructor(props)  {
        super(props);
    }
    render() {
        StatusBar.setBarStyle('dark-content', true)
        return (
            <LoggedInTabNavigator screenProps={{ rootNavigation: this.props.navigation }} />
        )
    }
}
