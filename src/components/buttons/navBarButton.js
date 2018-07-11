import React from 'react';
import propTypes from 'prop-types'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class NavBarButton extends React.Component {
    render() {
        const {location, text, icon, color, handleButtonPress} = this.props
        marginPosition = location === 'right' ? {marginRight: 20} : {marginLeft: 20}
        let content;
        if (text) {
            content = <Text style={[{color}, marginPosition, styles.navBarText]}>{text}</Text>
        }else if(icon) {
           content = <View>{icon}</View>
        }
        return (
            <TouchableOpacity onPress={handleButtonPress}>
                {content}
            </TouchableOpacity>
        )
    }
}

NavBarButton.propTypes = {
    location: propTypes.string,
    text: propTypes.string,
    icon: propTypes.object,
    handleButtonPress: propTypes.func.isRequired
}

const styles = StyleSheet.create({
    navBarText: {
        fontSize: 16
    }
})