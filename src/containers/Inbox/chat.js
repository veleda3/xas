import React from 'react';
import {
    View, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform, 
    FlatList} from 'react-native';
import {getMessages, pushMessage} from '../../services/api';
import Compose from '../../components/chatComponents/compose';
import {MaterialIcons} from '@expo/vector-icons'
import Colors from '../../styles/colors'
import {message} from '../../components/chatComponents/message'


export default class Chat extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
            headerLeft: (<MaterialIcons name="chevron-left" size={40} color="#ffffff" onPress={() => navigation.goBack() } />)
        }
    }
    state = {
        messages: []
    }

    componentDidMount() {
        this.unsubcribeGetMessages = getMessages((snapshot) => {
            this.setState({
                messages: Object.values(snapshot.val())
            })
        })
    }
    componentWillUnmount() {
        this.unsubcribeGetMessages()
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.container}
                >
                    <FlatList 
                        style={styles.container}
                        data={this.state.messages}
                        renderItem={message}
                        keyExtractor={(item, Index) => `chat-message-${Index}`}
                    >
                    </FlatList>
                    <Compose submit={pushMessage} />
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100
    },
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