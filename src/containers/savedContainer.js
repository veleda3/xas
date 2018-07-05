import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
export default class Saved extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-heart-outline" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Save container</Text>
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