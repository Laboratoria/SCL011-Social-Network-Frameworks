import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyA6JkwTLmqMHwumZpOgogU9eunUczaW4gk",
    authDomain: "baby-ganga.firebaseapp.com",
    databaseURL: "https://baby-ganga.firebaseio.com",
    projectId: "baby-ganga",
    storageBucket: "baby-ganga.appspot.com",
    messagingSenderId: "755922217986",
    appId: "1:755922217986:web:538a4c60cf4c0a2265cb1b",
    measurementId: "G-7VYCRLYEDE"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
