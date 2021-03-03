import React,{ Fragment } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

import "./cart-icon.styles.scss";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = props => {

    return(
        <Fragment>
            <div className="cart-icon" onClick={props.toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">0</span>
            </div>
            <CartDropdown cart={props.cart}/>
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

const mapStateToProps = (state) => {
    return({
        cart:state.cart
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);