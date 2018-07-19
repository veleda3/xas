import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import StackInbox from '../../navigators/InboxNavigator';

export default class InboxIndex extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({tintColor}) => (
            <MaterialIcons 
                name="mail" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <StackInbox screenProps={{ rootNavigation: this.props.navigation }} />

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 50
    }
})