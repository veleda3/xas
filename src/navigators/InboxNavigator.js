import {StackNavigator} from 'react-navigation'
import Inbox from '../containers/Inbox/inbox'
import Alerts from '../containers/Inbox/alerts'
import Chat from '../containers/Inbox/chat'
import Colors from '../styles/colors'

const StackInbox = StackNavigator(
    {
        Inbox: { screen: Inbox},
        Alerts: {screen: Alerts},
        Chat: {screen: Chat}
    },
    {
        mode: "card",        
        navigationOptions: {
            header: null
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
)


export default StackInbox