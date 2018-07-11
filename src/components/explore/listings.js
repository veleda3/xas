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

    constructor(props) {
        super(props)
        this.renderListing = this.renderListing.bind(this)
    }

    get randomColor() {
        const colors = [
            Colors.darkGray,
            Colors.darkOrange,
            Colors.green01,
            Colors.red,
            Colors.facebookBlue,
            Colors.pink,
            Colors.brown
        ]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    renderListing(){
        const {listings} = this.props
        
        return listings.map((listing, index) => {
            const upperCaseType = listing.type.toUpperCase()
            return(
                <TouchableHighlight 
                key={`listing-touchable-${index}`} 
                style={styles.card} >
                    <View key={`listing-item-${index}`}>
                        <Image
                            source={listing.photo}
                            resizeMode="stretch"
                            style={styles.photo}
                        />
                        <Text
                        style={[{color: this.randomColor}, styles.listingType]}
                        numberOfLines={2}
                        >
                        {upperCaseType}
                        </Text>
                        <Text style={styles.listingTitle}>{listing.title}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        const {category, boldTitle} = this.props
        const headingStyle = boldTitle ? {fontSize: 22, fontWeight: '600'} : {fontSize: 18}
        return(
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={[headingStyle, styles.heading]}>{category}</Text>
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
        marginLeft: 10,
        marginBottom: 40
    },
    card: {
        marginRight: 3,
        marginLeft: 2,
        width: 140,
        flexDirection: 'column',
        minHeight: 100,
        borderRadius: 4,
    },
    cardContent: {

    },
    photo: {
        width: undefined,
        flex: 1,
        height: 100,
        borderRadius: 3,
        marginBottom: 2,
    },
    listingType: {
        fontWeight: '500',
    },
    listingTitle: {
       fontWeight: '300',
       color: Colors.darkGray
    }
})