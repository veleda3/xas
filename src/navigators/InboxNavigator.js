import {StackNavigator} from 'react-navigation'
import Inbox from '../containers/Inbox/inbox'
import Alerts from '../containers/Inbox/alerts'
import Chat from '../containers/Inbox/chat'

const StackInbox = StackNavigator(
    {
        Inbox: { screen: Inbox},
        Alerts: {screen: Alerts},
        Chat: {screen: Chat}
    },
    {
        navigationOptions: {
            header: null
        }
    }
)


export default StackInbox