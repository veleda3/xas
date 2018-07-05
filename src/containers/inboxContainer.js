import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
export default class Inbox extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-mail" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Inbox container</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 50
    }
})