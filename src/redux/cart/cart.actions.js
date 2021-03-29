import { cartActionTypes } from "./cart.action.types";

export const toggleCartHidden = () => {

    return (
        {
            type: cartActionTypes.TOGGLE_CART_HIDDEN
        }
    );

};

export const addItemToCart = (item) => {

    return {
        type: cartActionTypes.ADD_TO_CART,
        payload: item
    }


    
}


export const reduceItem = (ItemId) => {

    return {
        type: cartActionTypes.REDUCE_ITEM,
        payload: ItemId
    }


    
}


export const removeFromCart = (ItemId) => {

    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        payload: ItemId
    }


    
}


