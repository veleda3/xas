import React from 'react';
import propTypes from 'prop-types';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Image
} from 'react-native';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';


export default class Listings extends React.Component {

    renderListing(){
        const {listings} = this.props
        
        return listings.map((listing, index) => {
            return(
                <TouchableHighlight 
                key={`listing-touchable-${index}`} 
                style={styles.card} >
                    <View key={`listing-item-${index}`}>
                        <Image
                            source={listing.photo}
                            resizeMode="contain"
                            style={styles.photo}
                        />
                        <Text>{listing.type}</Text>
                        <Text>{listing.title}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        const {category} = this.props
        return(
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{category}</Text>
                    <TouchableOpacity style={styles.seeAllBtns}>
                        <Text style={styles.seeAllBtnsText}>see all </Text>
                        <FontAwesome name="angle-right" size={18} color={Colors.darkGray} />
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    horizontal={true}
                    contentContainerStyle={{paddingRight: 30}}
                    showsHorizontalScrollIndicator={false}
                    style={styles.ScrollView}
                >
                    {this.renderListing()}
                </ScrollView>
            </View>

        )
    } 
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    heading: {

    },
    seeAllBtns: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeAllBtnsText: {
        color: Colors.darkGray,
        marginRight: 5
    },
    ScrollView: {
        marginTop: 20,
        marginLeft: 15
    },
    card: {
        marginRight: 6,
        marginLeft: 5,
        width: 160,
        flexDirection: 'column',
        minHeight: 100
    },
    cardContent: {

    },
    photo: {
        width: undefined,
        flex: 1,
        height: 100,
        borderRadius: 3,
        marginBottom: 2
    }
})