import { cartActionTypes } from "./cart.action.types";

import { addItemToCart, removeCart, reduceItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
    cartQuantity:0,
    cartPriceTotal:0
};

const cartReducer = (state = INITIAL_STATE,action) => {

    switch(action.type){

        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_TO_CART:
            
            const {cartItems,cartQuantity,cartPriceTotal} = addItemToCart(state.cartItems,action.payload,state.cartQuantity,state.cartPriceTotal);
            
            return {
                ...state,
                cartItems: cartItems,
                cartQuantity: cartQuantity,
                cartPriceTotal:cartPriceTotal

            };
        case cartActionTypes.REDUCE_ITEM:

            const {reduceCartItems,reduceCartQuantity,reduceCartPriceTotal} = reduceItem(action.payload,state.cartItems,state.cartQuantity,state.cartPriceTotal);

            // return state;
            
            return {
                ...state,
                cartItems: reduceCartItems,
                cartQuantity: reduceCartQuantity,
                cartPriceTotal:reduceCartPriceTotal
            };

        case cartActionTypes.REMOVE_FROM_CART:

            const {updatedcartItems,updatedcartQuantity,updatedcartPriceTotal} = removeCart(action.payload,state.cartItems,state.cartQuantity,state.cartPriceTotal);
            
            return {
                ...state,
                cartItems: updatedcartItems,
                cartQuantity: updatedcartQuantity,
                cartPriceTotal:updatedcartPriceTotal
            };
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems:[],
                cartQuantity:0,
                cartPriceTotal:0
            }
        default:
            return state;

    };

};


export default cartReducer;