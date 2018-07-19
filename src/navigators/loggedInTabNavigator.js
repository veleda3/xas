import {TabNavigator} from 'react-navigation';
import  Explore from '../containers/exploreContainer';
import Map from '../containers/mapContainer';
import OrdersBooked from '../containers/ordersBookedContainer';
import Profile from '../containers/profileContainer';
import InboxIndex from '../containers/Inbox';
import Colors from '../styles/colors'

const LoggedInTabNavigator = TabNavigator({
    Map: {screen: Map},
    Explore: {screen: Explore},
    InboxIndex: {screen: InboxIndex},
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