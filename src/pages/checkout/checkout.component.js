import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems,cartPriceTotal } from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = ({cartitems,cartPriceTotal}) => {

    const listCart = ()=>{

        const list = cartitems.map(item=>{

            return <CheckoutItem key={item.id} cartItem={item}/>

        });

        return list;

    };

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {listCart()}
            <div className="total">
                <span>Total: ${cartPriceTotal}</span>
            </div>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    cartitems:selectCartItems,
    cartPriceTotal:cartPriceTotal
})

export default connect(mapStateToProps)(CheckOutPage);