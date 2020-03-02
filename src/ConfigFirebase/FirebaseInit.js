import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyA6JkwTLmqMHwumZpOgogU9eunUczaW4gk",
    authDomain: "baby-ganga.firebaseapp.com",
    databaseURL: "https://baby-ganga.firebaseio.com",
    projectId: "baby-ganga",
    storageBucket: "baby-ganga.appspot.com",
    messagingSenderId: "755922217986",
    appId: "1:755922217986:web:538a4c60cf4c0a2265cb1b",
    measurementId: "G-7VYCRLYEDE"
})
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default db;
