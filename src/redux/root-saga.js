import { all,call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSaga } from "./user/user.saga";

export default function* rootSaga(){
    yield all([
        call(fetchCollectionStart),
        call(userSaga)
    ]);
}