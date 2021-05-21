import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyDehGrjCm3ZAK7voaZvSG0OOcBh8j-D_X4",
    authDomain: "crwn-clothing-f734c.firebaseapp.com",
    projectId: "crwn-clothing-f734c",
    storageBucket: "crwn-clothing-f734c.appspot.com",
    messagingSenderId: "1048534733831",
    appId: "1:1048534733831:web:f4728b93fffa15140ec6a2",
    measurementId: "G-WCN6PKPS4L"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>{
    auth.signInWithPopup(GoogleProvider);
}

export const createUserProfileDocument = async(userAuth, additionalData) => {

  if(!userAuth){
    return;
  }

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){

    const {displayName, email} = userAuth;
    const createdAt = new Date();
    

    try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    }
    catch(error){

      console.log('error creating user',error.message);

    }


  }

  return userRef;


};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {

  const collectionRef = fireStore.collection(collectionKey);

  const batch = fireStore.batch();

  objectsToAdd.forEach(item=>{
    const docRef = collectionRef.doc();
    batch.set(docRef,item);
  });

  return await batch.commit();

};

export const convertCollectionsSpanshotToMap = (collections) => {

  let transformedCollections = {};

  collections.docs.forEach(doc=>{
    const {title,items} = doc.data();

    transformedCollections[title.toLowerCase()] = {
      id:doc.id,
      routeName:encodeURI(title.toLowerCase()),
      title:title,
      items:items
    }
  });

  return transformedCollections;

};

export const getCurrentUser = () => {
  return (
    new Promise((resolve,reject)=>{
      const unSubscribe = auth.onAuthStateChanged(userAuth=>{
        unSubscribe();
        resolve(userAuth);
      },reject);
    })
  );
}

export default firebase;