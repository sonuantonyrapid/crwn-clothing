import ShopActionType from "./shop.types";
import {fireStore,convertCollectionsSpanshotToMap} from "../../fiebase/fiebase.utils";


export const fetchCollectionsStart = () => {
    return {
        type:ShopActionType.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionsSuccess = (collections) => {
    return {
        type:ShopActionType.FETCH_COLLECTIONS_SUCCESS,
        payload:collections
    }
}

export const fetchCollectionsError = (errorMessage) => {
    return {
        type:ShopActionType.FETCH_COLLECTIONS_SUCCESS,
        payload:errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = fireStore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then( snapshot => {
            const collections = convertCollectionsSpanshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collections)); 
        }).catch(error=>dispatch(fetchCollectionsError(error.message)));
    }
}

export const updateCollections = (collections) => {
    return {
        type:ShopActionType.UPDATE_COLLECTIONS,
        payload:collections
    };
}