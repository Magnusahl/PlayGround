import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiyNALfpqSHincBX7lavJTLUe-HvxDH7Q",
    authDomain: "playground-2f2dc.firebaseapp.com",
    projectId: "playground-2f2dc",
    storageBucket: "playground-2f2dc.appspot.com",
    messagingSenderId: "508494385850",
    appId: "1:508494385850:web:a3c5843d696b3cc2a22883",
    measurementId: "G-YTVT6K6E8K"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();