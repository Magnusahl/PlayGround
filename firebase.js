import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3Xg-oqeEUfc8VypJ5BoErqdZSyE91ggE",
    authDomain: "labauth-4cf10.firebaseapp.com",
    projectId: "labauth-4cf10",
    storageBucket: "labauth-4cf10.appspot.com",
    messagingSenderId: "707249657559",
    appId: "1:707249657559:web:7214aa6d0a7b6a2165c292",
    measurementId: "G-ME49LMW58C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();