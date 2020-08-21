import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeKTirmOAf5WgbbeRKgXeeiRjNUPNWU4Y",
    authDomain: "messenger-cone.firebaseapp.com",
    databaseURL: "https://messenger-cone.firebaseio.com",
    projectId: "messenger-cone",
    storageBucket: "messenger-cone.appspot.com",
    messagingSenderId: "744434437124",
    appId: "1:744434437124:web:cd8fd024b01cd557ab3951"
});

const db = firebase.firestore();

export {db};