//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "linkedin-clone-f87b0.firebaseapp.com",
    projectId: "linkedin-clone-f87b0",
    storageBucket: "linkedin-clone-f87b0.appspot.com",
    messagingSenderId: "574775289309",
    appId: "1:574775289309:web:c7115ce281be454d7cc234"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  




