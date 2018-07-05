import {AppNavigator} from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut')
const initialNavState = AppNavigator.router.getStateForAction(firstAction)

export const nav = (state = initialNavState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
}