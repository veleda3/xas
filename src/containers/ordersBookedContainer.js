import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
export default class OrdersBooked extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'ORDERS',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-pizza" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Orders container</Text>
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