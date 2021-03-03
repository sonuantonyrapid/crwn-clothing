import React from "react";

import "./cart-dropdown.styles.scss";

import CustonButton from "../custom-button/custom-button.component";

const CartDropdown = props => {

    return (
        <div className={`cart-dropdown ${props.cart.hidden?'':"show"}`}>
            <div className="cart-items"></div>
            <CustonButton>Go to checkout</CustonButton>
        </div>
    );

};

export default CartDropdown;