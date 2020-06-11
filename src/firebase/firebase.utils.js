import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyBiMhVvEkiDGB-eAYwM5bfaolNzxdTR8o8",
    authDomain: "hypno-db-b8de7.firebaseapp.com",
    databaseURL: "https://hypno-db-b8de7.firebaseio.com",
    projectId: "hypno-db-b8de7",
    storageBucket: "hypno-db-b8de7.appspot.com",
    messagingSenderId: "2423025075",
    appId: "1:2423025075:web:b1413ae09c9f2158f6afc6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
