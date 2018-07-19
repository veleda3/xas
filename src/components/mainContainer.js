import React from 'react'
import {StyleSheet, View, Platform} from 'react-native'
import Colors from '../styles/colors'

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {statusNavBar} = this.props
        return (
            <View style={[styles.container, this.props.style || {}]}>
                {
                    Platform.OS == 'ios' && 
                    <View style={[ statusNavBar || {}, {height: 20}]}>
                    </View>
                }
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        alignItems: 'stretch',
        flex: 1
    }
})