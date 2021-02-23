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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider);
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

export default firebase;