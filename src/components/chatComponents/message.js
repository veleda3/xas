import React from 'react'
import {StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Text from '../forms/Text'
import Colors from '../../styles/colors'
import {USER_ID} from '../../services/api'

export const message = (item) => {
    console.log(item)
    const incoming = item.userId !== USER_ID
    return (
        <Animatable.View>
            duration={100}
            animation={incoming ? 'slideInLeft' : 'slideInRight'}
            style={[styles.message, incoming && styles.incomingMessage]}
            <Text>{item.message}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    message: {
        width: '70%',
        margin: 10,
        padding: 10,
        borderColor: Colors.middleGray,
        borderStyle: 'solid',
        borderWidth: 1,
        alignSelf: 'flex-end',
        backgroundColor: Colors.messageGreen,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-start',
        backgroundColor: Colors.white
    }
})