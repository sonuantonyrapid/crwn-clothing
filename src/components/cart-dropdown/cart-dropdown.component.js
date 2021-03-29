import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";

import CustonButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = props => {

    const items = () => {

        let cartItems = "";

        if(props.cartItems.length){

            cartItems = props.cartItems.map(cartItem=>{
                return <CartItem key={`cart_${cartItem.id}`} item={cartItem} />;
            });

        }
        else{

            cartItems = <span className="empty-message">Your cart is empty</span>;

        }

        

        return cartItems;

    };

    return (
        <div className={`cart-dropdown ${props.cartToggle?'':"show"}`}>
            <div className="cart-items">
                {items()}
            </div>
            <Link to="/checkout">
                <CustonButton onClick={props.toggleCartHidden}>Go to checkout</CustonButton>
            </Link>
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden:()=>{
            return dispatch(toggleCartHidden());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);