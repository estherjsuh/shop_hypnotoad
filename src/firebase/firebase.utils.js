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


  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const  snapShot = await userRef.get();


    //if there isn't any data in that place, create data
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }

            )
        } catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
  };


  firebase.initializeApp(config);

  
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  
  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
