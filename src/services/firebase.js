import * as firebase from 'firebase';

// Initialize Firebase
export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyDGZuZxfiGHNSENPPGk2Z8E-G6RBziM8O8",
    authDomain: "xasapp-210002.firebaseapp.com",
    databaseURL: "https://xasapp-210002.firebaseio.com",
    projectId: "xasapp-210002",
    storageBucket: "xasapp-210002.appspot.com",
    messagingSenderId: "724921062191"
})


export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}
