import {TabNavigator} from 'react-navigation';
import  Explore from '../containers/exploreContainer';
import Inbox from '../containers/inboxContainer';
import OrdersBooked from '../containers/ordersBookedContainer';
import Profile from '../containers/profileContainer';
import Saved from '../containers/savedContainer';
import Colors from '../styles/colors'

const LoggedInTabNavigator = TabNavigator({
    Explore: {screen: Explore},
    Saved: {screen: Saved},
    OrdersBooked: {screen: OrdersBooked},
    Inbox: {screen: Inbox},
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