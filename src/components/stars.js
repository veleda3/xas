import React from 'react';
import propTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/colors'

export default class Stars extends React.Component {

    get stars() {
        const {stars, color, size} = this.props
        
        starNumber = parseFloat(stars)
        if(starNumber === 0.0) {
            return <Text style={styles.noReview}>No reviews yet!</Text>
        } 
        starsElement = []
        for(let i = 0; i < 5; i++) {
            starsElement.push(
                <FontAwesome
                    key={i}
                    name="star"
                    size={size}
                    color={starNumber > i ? color : Colors.lightGray}
                />
            )
        }
        return starsElement
    }    
    render() {
        const {votes} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.starContainer}>
                    {this.stars}
                    {votes ? <Text style={styles.votes}>{votes}</Text> : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    votes: {
        fontWeight: '300',
        fontSize: 12,
        marginTop: 1,
        marginLeft: 3
    },
    noReview: {
        fontSize: 12,
        color: Colors.darkGray,
        fontWeight: '300'
    }
})

