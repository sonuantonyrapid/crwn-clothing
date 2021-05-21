import { all,call,put,takeLatest } from "redux-saga/effects";

import { cartActionTypes } from "./cart.action.types";
import userActionTypes from "../user/user.action.types";

import { clearCart } from "./cart.actions";

export function* onClearCart(){
    yield put(clearCart());
}

export function* onClearCartOnSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,onClearCart);
}

export function* cartSagas(){
    yield all([
        call(onClearCartOnSignOut),
    ]);
}