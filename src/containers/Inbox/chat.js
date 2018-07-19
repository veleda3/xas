import React from 'react';
import {View, StyleSheet, TextInput, Image, ScrollView} from 'react-native';
import Text from '../../components/forms/Text';
import MainContainer from '../../components/mainContainer';
import {simpleLineIcons} from '@expo/vector-icons';
import data from '../../data/chatData'


export default class Chat extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text> Chat screen </Text>
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