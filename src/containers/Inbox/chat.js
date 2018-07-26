import React from 'react';
import {
    View, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform, 
    FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {getMessages, pushMessage} from '../../services/api';
import Compose from '../../components/chatComponents/compose';
import Text from '../../components/forms/Text';
import MainContainer from '../../components/mainContainer';
import {MaterialIcons} from '@expo/vector-icons'
import Colors from '../../styles/colors'
import {USER_ID} from '../../services/api'


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
            console.log(snapshot.val())
            this.setState({
                messages: snapshot.val()
            })
        })
    }    

    _renderMessage(item) {
        console.log(item)
        const incoming = item.userId !== USER_ID
        return (
            <Animatable.View>
                duration={100}
                animation={incoming ? 'slideInLeft' : 'slideInRight'}
                style={[styles.message, incoming && styles.incomingMessage]}
                <Text>{item.message}</Text>
            </Animatable.View>
        )
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
                        renderItem={( item ) => console.log('here is your thing',item)}
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