import React from 'react';
import {
    View, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform, 
    FlatList} from 'react-native';
import {getMessages, pushMessage} from '../../services/api';
import Compose from '../../components/chatComponents/compose';
import { message } from '../../components/chatComponents/message';
import Text from '../../components/forms/Text';
import MainContainer from '../../components/mainContainer';
import {MaterialIcons} from '@expo/vector-icons'


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
                messages: snapshot.val()
            })
        })
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
                    />
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
    }
})