import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD_OHzcd0b7PmeYeOhzzEHNZTov9SmXIRE",
    authDomain: "react-firebase-bb39f.firebaseapp.com",
    databaseURL: "https://react-firebase-bb39f.firebaseio.com",
    projectId: "react-firebase-bb39f",
    storageBucket: "react-firebase-bb39f.appspot.com",
    messagingSenderId: "1052360726154",
    appId: "1:1052360726154:web:5b3f901f6839f0720a7f73"
};

export default firebase.initializeApp(firebaseConfig);