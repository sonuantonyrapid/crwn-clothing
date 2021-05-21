import { takeLatest,put,all,call } from "redux-saga/effects";

import { auth,GoogleProvider,createUserProfileDocument,getCurrentUser } from "../../fiebase/fiebase.utils";

import userActionTypes from "./user.action.types";

import { signInSuccess,signInFailure,signOutSuccess,signOutFailure,signUpFailure } from "./user.actions";

export function* snapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }
    catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(GoogleProvider);
        yield snapshotFromUserAuth(user);
    }
    catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* onGoogleSignInStart(){
    
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);

}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = auth.signInWithEmailAndPassword(email,password);
        yield snapshotFromUserAuth(user);
    }
    catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        yield snapshotFromUserAuth(userAuth);
    }
    catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error){
        yield put(signOutFailure(error.message));
    }
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut);
}

export function* createUser({payload}){
    try{

        const {email,password,displayName} = payload;

        const {user} = yield auth.createUserWithEmailAndPassword(email,password);

        yield snapshotFromUserAuth({...user,displayName:displayName});

    }
    catch(error){

        yield put(signUpFailure(error.message));

    }
}

export function* onCreateUserStart(){
    yield takeLatest(userActionTypes.CREATE_USER_START,createUser);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onCreateUserStart)
    ]);
}