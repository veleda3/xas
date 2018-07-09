import React from 'react';
import propTypes from 'prop-types';
import NavigationActions from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import {transparentHeaderStyle} from '../styles/transparentHeaderStyle';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Colors from '../styles/colors'
export default class TurnOnNotifications extends React.Component {
    
    static navigationOptions = ({navigation}) => ({
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        gestureEnable: false
    })
    
    constructor(props) {
        super(props)
        this.state = {
            receiveNotifications: false
        }
        this.handleSkipButton = this.handleSkipButton.bind(this)
        this.handleYesButton = this.handleYesButton.bind(this)
    }

    handleYesButton() {
        const {navigate} = this.props.navigation
        this.setState({receiveNotifications: true})
        alert('yes button pressed')
        navigate('LoggedIn')
    }

    handleSkipButton() {
        const {navigate} = this.props.navigation
        this.setState({receiveNotifications: false})
        alert('skip button pressed')
        navigate('LoggedIn')
    }
    render() {     
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <FontAwesome
                        name="comments-o"
                        size={46}
                        style={styles.icon}
                    />
                    <Text style={styles.headerText}>
                        Turn on notifications?
                    </Text>
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>
                            We can let you know when someone message you, or notify you about other important account activity.
                        </Text>
                    </View>
                    <TouchableHighlight
                        style={styles.yesButton}
                        onPress={this.handleYesButton}
                    >
                        <Text style={styles.yesButtonText}>
                            Yes, notify me
                        </Text>    
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.skipButton}
                        onPress={this.handleSkipButton}
                    >
                        <Text style={styles.skipButtonText}>
                            Skip
                        </Text>    
                    </TouchableHighlight>
                    
                </View>
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    contentContainer: {
        marginTop: 80,
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        color: Colors.green01,
        marginBottom: 15
    },
    headerText: {
        fontSize: 28,
        fontWeight: '600'

    },
    messageContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 15
    },
    messageText: {
        fontSize: 16
    },
    yesButton: {
        backgroundColor: Colors.green01,
        marginTop: 50,
        borderRadius: 5,
        padding: 10,
        width: 160,
        alignItems: 'center'
    },
    yesButtonText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 20
    },


    skipButton: {
        borderColor: Colors.green01,
        marginTop: 30,
        borderRadius: 5,
        padding: 15,
        borderWidth: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        width: 120

    },
    skipButtonText: {
        color: Colors.green01,
        fontWeight: '600',
        fontSize: 20
    }
})