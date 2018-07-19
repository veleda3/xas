import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../../styles/colors'

export default class TextCustom extends React.Component {
    render() {
        const type = this.props.type || {}
        const style = {style: [ StyleSheet.default, styles[type], this.props.style || {}]}
        const props = Object.assign({}, this.props, style)
        return (
            <Text {...props}>{this.props.children}</Text>
        )
    }
}
const h5 = { fontSize: 16 }
const h4 = { fontSize: 18 }
const h3 = { fontSize: 25 }
const h1 = { fontSize: 32 }

styles = StyleSheet.create({
    default: {
        color: Colors.txtDark
    },
    spanWhite: {
        color: Colors.white
    },
    h5,
    h5White: {
        ...h5,
        color: Colors.white
    },
    h4,
    h4White: {
        ...h4,
        color: Colors.white
    },
    h3,
    h3White: {
        ...h3,
        color: Colors.white
    },
    h1,
    h1White: {
        ...h1,
        color: Colors.white
    }
})