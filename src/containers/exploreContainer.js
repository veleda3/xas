import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';

export default class Explore extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-search" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Explore container</Text>
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