import React from 'react';
import {View, Keyboard, StyleSheet, Button, TextInput} from 'react-native'
import Colors from '../../styles/colors'


export default class Compose extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        this.props.submit(this.state.text)
        this.setState({
            text: ''
        })
        Keyboard.dismiss()

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Enter your message here'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.text}
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={this.onSubmit}
                    editable={true}
                    maxLength={40}
                />
                <Button 
                    onPress={this.onSubmit}
                    title="Send"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10

    },
    input: {
        height: 40,
        color: Colors.txtDark,
        fontSize: 16,
        borderRadius: 3
    }
})