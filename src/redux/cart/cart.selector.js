import { createSelector } from "reselect";

export const selectCart = state => {
    return state.cart;
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>{

        return cart.cartItems;

    }
);


export const selectCartItemsCount = createSelector(
    [selectCart],
    (cart)=>{

        return cart.cartQuantity;

    }
);

export const cartToggle = createSelector(
    selectCart,(cart)=>{
        return cart.hidden;
    }
);

export const cartPriceTotal = createSelector(
    [selectCart],
    (cart)=>{
        return cart.cartPriceTotal;
    }
);