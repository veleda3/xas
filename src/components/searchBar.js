import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/colors';

export default class SearchBar extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Ionicons 
                        name="ios-search" 
                        size={20} 
                        color={Colors.lightGray}
                        style={styles.icon} 
                    />
                    <Text style={styles.text}>try "Mexican"</Text>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: '100%',
        height: 80
    },
    searchContainer: {
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.white,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        borderRadius: 3,
        height: 41,
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20

    },
    icon: {
        position: 'absolute',
        left: 18,
        top: 9
    },
    text: {
        display: 'flex',
        marginTop: 10,
        marginLeft: 45,
        color: Colors.lightGray

    }

})