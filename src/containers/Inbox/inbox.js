import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import inboxData from '../../data/InboxData'
import {getChats} from '../../services/api'
import {SimpleLineIcons} from '@expo/vector-icons';
import Maincontainer from '../../components/mainContainer'
import Text from '../../components/forms/Text'
import Colors from '../../styles/colors'




export default class Inbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Data: [],
        }
        this.onPressAlerts = this.onPressAlerts.bind(this)
        this._onPressRow = this._onPressRow.bind(this)
    }

    componentDidMount() {
        getChats().then(chat => this.setState({
            Data: chat
        }))
    }

    onPressAlerts() {
        this.props.navigation.navigate('Alerts')
    }

    _renderRow(data) {
        let rowData = data.item
        return(
            <TouchableOpacity
                onPress={this._onPressRow}
                style={styles.row}
            >
                <Image 
                    style={styles.avatar} 
                    source={rowData.avatarUri}
                />
                <View style={styles.rightPart}>
                    <View style={styles.detail}>
                        <Text style={styles.username}>{rowData.username}</Text>
                        <Text style={styles.dataTime}>{rowData.createdDate}</Text>
                        <Text style={styles.description} ellipsizeMode='tail' numberOfLines={2}>{rowData.description}</Text>
                    </View>
                </View>


            </TouchableOpacity>
        )
    }

    _onPressRow() {
        this.props.navigation.navigate('Chat')
    }

    render() {
        return (
            <Maincontainer>
                <View style={ styles.navBar }>
                    <TouchableOpacity onPress={ this.onPressAlerts }>
                        <SimpleLineIcons style={ styles.icon } name='bell' size={16} />
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={styles.flatListContainer}
                    ListHeaderComponent={() => {
                        return (<View style={styles.flatListHeader}>
                            <Text style={styles.screenTitle} type='1'>Inbox</Text>
                            <Text> Messaging count</Text>
                        </View>)
                    }}
                    enableEmptySection={true}
                    data={this.state.Data}
                    renderItem={(rowData) => this._renderRow(rowData)}
                    keyExtractor={(rowData, Index) => Index.toString()}
                    removeClippedSubviews={false}
                    >

                </FlatList>
            </Maincontainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 50
    },
    navBar: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 15
    },
    icon: {
        color: Colors.txtDark,
        padding: 10

    },
    flatListContainer: {
        paddingHorizontal: 25
    },
    flatListHeader: {
        paddingBottom: 30,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenTitle: {
        fontWeight: '700',
        color: Colors.darkGray
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.darkGray
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    detail: {
    },
    rightPart: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700',
        marginRight: 10,
        color: Colors.darkGray
    },
    dataTime: {
        fontWeight: '300'
    },
    description: {
        marginTop: 3,
        paddingRight: 60
    }

})