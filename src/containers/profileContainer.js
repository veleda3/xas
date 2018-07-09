import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux'
import * as actions from '../redux/actions';
import Colors from '../styles/colors'
class Profile extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-contact-outline" 
                size={22} 
                color={tintColor} 
            />
        )
    }
    constructor(props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    handleLogOut() {
        console.log(this.props)
        this.props.navigation.dispatch(
            {
                type: 'Navigation',
                routeName: 'AppNavigator',
                action: {
                    type: 'Navigation',
                    routeName: 'LoggedOut',
                }
            });
        AsyncStorage.removeItem('fb_token') 
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handleLogOut} style={styles.logOutButton}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
                
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 50
    },
    logOutButton: {
        backgroundColor: Colors.green01,
        marginTop: 50,
        borderRadius: 5,
        padding: 10,
        width: 160,
        alignItems: 'center'
    }
})

export default connect(null, actions)(Profile)