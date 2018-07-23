import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    authDomain: "xasapp-210002.firebaseapp.com",
    databaseURL: "https://xasapp-210002.firebaseio.com",
    projectId: "xasapp-210002",
    storageBucket: "xasapp-210002.appspot.com",
    messagingSenderId: "724921062191"
};

firebase.initializeApp(firebaseConfig);

export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn)
    return () => firebase.database().ref(endpoint).off()
}

export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}