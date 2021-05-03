import firebase from 'firebase/app'
import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpCuK7q7Mc3ies9kcALWoq7SIwxPn0ric",
    authDomain: "manuelrdz-68f6a.firebaseapp.com",
    databaseURL: "https://manuelrdz-68f6a.firebaseio.com",
    projectId: "manuelrdz-68f6a",
    storageBucket: "manuelrdz-68f6a.appspot.com",
    messagingSenderId: "769808605804",
    appId: "1:769808605804:web:217d3afde692b4b0746e49",
    measurementId: "G-HRLPK9NEMT"
};
// Initialize Firebase
if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics;

export {firebase, analytics}
