import { takeLatest,put,all,call } from "redux-saga/effects";

import { auth,GoogleProvider,createUserProfileDocument } from "../../fiebase/fiebase.utils";

import userActionTypes from "./user.action.types";

import { signInSuccess,signInFailure} from "./user.actions";

function* snapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }
    catch(error){
        yield put(signInFailure(error.message));
    }
}

function* signInWithGoogle(){
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

function* signInWithEmail({payload:{email,password}}){
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

export function* userSaga(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)]);
}