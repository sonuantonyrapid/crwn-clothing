import { takeLatest,call,put } from "redux-saga/effects";
import {fireStore,convertCollectionsSpanshotToMap} from "../../fiebase/fiebase.utils";
import { fetchCollectionsSuccess,fetchCollectionsError } from "./shop.actions";

import ShopActionType from './shop.types';

function* fetchCollectionsAsync(){
    try{
        const collectionRef = fireStore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSpanshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsError(error.message));
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}