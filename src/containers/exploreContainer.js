import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import SearchBar from '../components/searchBar'
import Colors from '../styles/colors'
import Listings from '../components/explore/listings';
import FoodListings from '../data/listings';

export default class Explore extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-search" 
                size={22} 
                color={tintColor} 
            />
        )
    }

    renderListings(){
        return FoodListings.map((listing, index) => {
            return (
                <View key={`listings-${index}`}>
                    <Listings
                        key={`listings-item${index}`}
                        category={listing.category}
                        boldTitle={listing.boldTitle}
                        listings={listing.listings}
                        showAddToFav={listing.showAddToFav}
                    />
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchBar />
                <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                >
                <Text style={styles.heading}>Best chefs in your area</Text>
                {this.renderListings()}

                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    scrollView: {
        paddingTop: 100,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    heading: {
        fontSize: 22,
        paddingLeft: 20,
        paddingBottom: 20,
        color: Colors.facebookBlue
    }
})