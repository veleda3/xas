import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { Animated } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

const AnimatedOpacityWrapper = createAnimatableComponent(TouchableOpacity)

export class ChatItem extends React.Component {

    state = {
        animatedValue: new Animated.Value(0)
    }

    componentDidMount(){
        Animated.timing(
        this.state.animatedValue,
        {
            toValue: 1,
            duration: 300,
        }
        ).start()
    }

    render() {
        const { navigation, item: { 
        id, avatarUri, description, createdDate, userName
        }} = this.props;
        const imageUrl = { uri: avatarUri };
        return (
        <Animated.View 
            style={{ 
            opacity: this.state.animatedValue,
            transform: [{ 
                translateX: this.state.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0]
                })
            }] 
            }}  
        >
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { id, userName })} 
            style={styles.chatItem}>
            <View style={styles.avatarContainer} >
            <Image 
                resizeMethod="scale"
                style={styles.avatar} 
                source={imageUrl} 
            />
            </View>
            <View style={styles.content}>
            <Text style={styles.label}>{ description }</Text>
            </View>
            <View style={styles.navLabel}>
            <Text style={styles.label}>{ createdDate }</Text>
            <MaterialIcons style={styles.arrow} name="chevron-right" size={20} />
            </View>
            </TouchableOpacity>
        </Animated.View>
        )
    }
    }

    const styles = StyleSheet.create({
    chatItem: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 24,
        marginLeft: 24
    },
    avatarContainer: {
        justifyContent: 'center',
        flex: 2
    },
    avatar: {
        resizeMode: 'stretch',
        borderRadius: Platform.OS === 'ios' ?  20 : 100,
        width: 40,
        height: 40,
    },
    content: {
        flex: 5
    },
    navLabel: {
        flex: 3,
        alignItems: 'flex-end',
    },
    title: {
        fontWeight: 'bold'
    },
    label: {
        color: "rgba(0,0,0,.5)"
    },
    arrow: {
    color: 'rgba(0,0,0,.5)' 
    }
    })