import { setListener, pushData, initialize} from './firebase';
import inboxData from '../data/InboxData';




export const USER_ID = '214-123-123-234'

export const getChats = () => (
    new Promise(resolve => setTimeout(() => resolve(inboxData), 1000))
)

export const initApi = () => initialize();


export const getMessages = (updaterFn) => setListener('messeges', (snapshot) => {
    if(snapshot) {
        updaterFn(snapshot)
    }
})

export const pushMessage = (message) => {
    if(Boolean(messege)) {
        return pushData('messeges', {
            urder_id: USER_ID,
            message
        })
    }
}