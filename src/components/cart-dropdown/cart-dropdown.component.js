import React from "react";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

import CustonButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = props => {

    const items = () => {

        const cartItems = props.cartItems.map(cartItem=>{
            return <CartItem key={`cart_${cartItem.id}`} item={cartItem} />;
        });

        return cartItems;

    };

    return (
        <div className={`cart-dropdown ${props.cartToggle?'':"show"}`}>
            <div className="cart-items">
                {items()}
            </div>
            <CustonButton>Go to checkout</CustonButton>
        </div>
    );

};

const mapStateToProps = state => {

    return {
        cartItems:selectCartItems(state)
    }

};

export default connect(mapStateToProps)(CartDropdown);