import {AsyncStorage} from 'react-native'
import {Facebook} from 'expo'
import * as types from './types'


export const facebookLogIn = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
        dispatch({
            type: types.FACEBOOK_LOGIN_SUCCESS,
            payload: token 
        })
    } else {
        doFacebookLogin(dispatch)
    } 
}

const doFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('846336918904989', {
        permissions: ['public_profile']
    })
    if (type == 'cancel') {
        return dispatch({type: types.FACEBOOK_LOGIN_FAIL})
    }
    await AsyncStorage.removeItem('fb_token')
    await AsyncStorage.setItem('fb_token', token);
    dispatch({
        type: types.FACEBOOK_LOGIN_SUCCESS,
        payload: token
    })
}

