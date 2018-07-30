import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, AsyncStorage, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux'
import {Button, Icon} from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons'
import * as actions from '../redux/actions';
import Colors from '../styles/colors'
import profileData from '../data/profileData'
import MainContainer from '../components/mainContainer';
import Text from '../components/forms/Text'
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
        this.state = {
            dataSource: profileData.data 
        }
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userInfoHolder}>
                    <View style={styles.userInfo}>
                        <Text type="h1" style={styles.username}>username</Text>
                        <Text type="h5">View and edit profile</Text>
                    </View>
                    <Image style={styles.avatar} source={require('../img/food12.jpg')}/>
                </View>
            </View>
        )
    }

    _renderRow = (data) => {
        let rowData = data.item
        return (
            <TouchableOpacity onPress={(rowData) => this._onPressRow(rowData)} style={ styles.row }>
                <View style={ styles.rowLeftParts }>
                    <Text type='h4'>{ rowData.name }</Text>
                    {
                        (rowData.description) ? <Text style={ styles.description }>{ rowData.description }</Text> : null
                    }
                </View>
                <MaterialIcons name={ rowData.iconName }  size={25} style={ styles.rowIcon } />     
            </TouchableOpacity>
        )
    }

    _onPressRow(data) {
    
    }

    handleLogOut() {
        const {navigate} = this.props.screenProps.rootNavigation
        AsyncStorage.removeItem('fb_token') 
        navigate('LoggedOut') 
    }

    render() {
        return (
            <MainContainer>
                <View style={styles.container}>
                    {this._renderHeader()}
                    <FlatList 
                        enableEmptySections={true}
                        data={this.state.dataSource}
                        renderItem={this._renderRow}
                        keyExtractor={(item, index) => index.toString()}
                        removeClippedSubviews={false}
                    />

                    <Button 
                        onPress={this.handleLogOut} 
                        borderRadius={10}
                        small
                        title="Log Out!"
                        backgroundColor={Colors.red}
                        icon={ <Icon name="fa-commenting-o" type="font-awesome" />}
                    />
                    
                </View>
            </MainContainer>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1
    },
    header: {
        marginTop: 40,
        marginBottom: 20,
    },
    userInfoHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    userInfo: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'                
    },
    username: {
        fontWeight: '700'

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    description: {
        fontSize: 12,
        color: Colors.txtDark,
        marginTop: 2
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightGray
    },
    rowLeftParts: {
        height: 70,
        justifyContent: 'center'
    },
    rowIcon: {
        color: Colors.txtDark
    }
})

export default connect(null, actions)(Profile)