import React,{ Fragment } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

import "./cart-icon.styles.scss";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount, cartToggle } from "../../redux/cart/cart.selector";

const CartIcon = props => {

    return(
        <Fragment>
            <div className="cart-icon" onClick={props.toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{props.cartQuantity}</span>
            </div>
            <CartDropdown cartToggle={props.cartToggle}/>
        </Fragment>
    );

}

const mapDispatchToProps = dispatch => {

    return ({
        toggleCartHidden:()=>{
            return dispatch(toggleCartHidden());
        }
    })

};

const mapStateToProps = createStructuredSelector({
    cartToggle:cartToggle,
    cartQuantity:selectCartItemsCount,
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);