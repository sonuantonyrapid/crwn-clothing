// import SHOP_DATA from "./shop.data";
import ShopActionType from "./shop.types";

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:''
};

const shopReducer = (state=INITIAL_STATE, action) => {
    
    switch (action.type) {
        case ShopActionType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            };
        case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections:action.payload,
                isFetching:false
            };
        case ShopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage:action.payload
            };
        case ShopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections:action.payload
            };
        default:
            return state;
    }

}

export default shopReducer;