import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import { MapView } from 'expo';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import RoundedButton from '../components/buttons/roundedButton'
import Colors from '../styles/colors'

export default class Map extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'MAP',
        tabBarIcon: ({tintColor}) => (
            <Ionicons 
                name="ios-map" 
                size={22} 
                color={tintColor} 
            />
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            mapLoaded: false,
            region: null,
            lastLat: null,
            lastLong: null,
        }
        this.onRegionChange = this.onRegionChange.bind(this)
        this.onMapPress = this.onMapPress.bind(this)
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                longitudeDelta: 0.04,
                latitudeDelta: 0.09
            }
            this.onRegionChange(region, region.latitude, region.longitude)
        })
    }

    onRegionChange(region, lastLatitude, lastLongitude) {
        this.setState({
            region,
            // If there are no new values set use the the current ones
            lastLat: lastLatitude || this.state.lastLat,
            lastLong: lastLongitude || this.state.lastLong
        })
    }

    onMapPress(event) {
        let region = {
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
        this.onRegionChange(region, region.latitude, region.longitude)
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }

    onButtonPress() {
        alert('map button pressed')
    }

    render() {
        if(!this.state.mapLoaded) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={styles.mapContainer}>
                <MapView
                    region={this.state.region}
                    style={styles.map}
                    onRegionChangeComplete={this.onRegionChange}
                    onPress={this.onMapPress}
                    showsUserLocation={true}
                    followUserLocation={true}
                >
                </MapView>
                <RoundedButton
                    text="Search for your chef!"
                    backgroundColor={Colors.white}
                    color={Colors.red}
                    icon={<FontAwesome name="search" size={20} style={styles.buttonIcon} />}
                    handleOnPress={this.onButtonPress}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        display: 'flex',
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    map: {
        flex: 1
    },
    ButtonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    },
    buttonIcon: {
        color: Colors.facebookBlue,
        position: 'relative',
        left: 20,
        zIndex: 8,
      }
})