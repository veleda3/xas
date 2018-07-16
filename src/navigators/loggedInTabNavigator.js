import {TabNavigator} from 'react-navigation';
import  Explore from '../containers/exploreContainer';
import Map from '../containers/mapContainer';
import OrdersBooked from '../containers/ordersBookedContainer';
import Profile from '../containers/profileContainer';
import Saved from '../containers/savedContainer';
import LoggedOut from '../screens/loggedOut'
import Colors from '../styles/colors'

const LoggedInTabNavigator = TabNavigator({
    Map: {screen: Map},
    Explore: {screen: Explore},
    Saved: {screen: Saved},
    OrdersBooked: {screen: OrdersBooked},
    Profile: {screen: Profile},
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5         
        },
        activeTintColor: Colors.pink
    }
})

export default LoggedInTabNavigator