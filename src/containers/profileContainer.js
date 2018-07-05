import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
export default class Profile extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-contact-outline" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile container</Text>
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