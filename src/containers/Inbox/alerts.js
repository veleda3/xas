import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



export default class Alerts extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text> Alerts screen </Text>
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