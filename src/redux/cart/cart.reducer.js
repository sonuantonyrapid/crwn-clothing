import { cartActionTypes } from "./cart.action.types";

import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
    cartQuantity:0
};

const cartReducer = (state = INITIAL_STATE,action) => {

    switch(action.type){

        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_TO_CART:
            
            const {cartItems,cartQuantity} = addItemToCart(state.cartItems,action.payload,state.cartQuantity);
            
            return {
                ...state,
                cartItems: cartItems,
                cartQuantity: cartQuantity

            };
        case cartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        default:
            return state;

    };

};


export default cartReducer;