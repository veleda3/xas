import {TabNavigator} from 'react-navigation';
import  Explore from '../containers/exploreContainer';
import Inbox from '../containers/inboxContainer';
import OrdersBooked from '../containers/ordersBookedContainer';
import Profile from '../containers/profileContainer';
import Saved from '../containers/savedContainer';

const LoggedInTabNavigator = TabNavigator({
    Explore: {screen: Explore},
    Inbox: {screen: Inbox},
    OrdersBooked: {screen: OrdersBooked},
    Profile: {screen: Profile},
    Saved: {screen: Saved}
}, {
    tabBarOptions: {
        fontWeight: '600'
    }
})

export default LoggedInTabNavigator