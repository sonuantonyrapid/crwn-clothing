import React from "react";

import { connect } from "react-redux";
import { addItemToCart,removeFromCart,reduceItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem,addItemToCart,removeFromCart,reduceItem,...otherProps}) => {

    const removeItemHandler = (action,itemId)=>{

        if(action === 'removeItem'){

            removeFromCart(itemId);

        }
        else if(action === 'reduceItem'){

            reduceItem(itemId);

        }
        else{
            alert('Invalid entry');
        }

    }

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={cartItem.imageUrl}/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItemHandler('reduceItem',cartItem.id)}>&#10094;</div>
                <span className="value">{cartItem.quantity}</span>
                <div className="arrow" onClick={()=>{addItemToCart(cartItem)}}>&#10095;</div>
            </span>
            <span className="price">{cartItem.price}</span>
            <div className="remove-button" onClick={()=>removeItemHandler('removeItem',cartItem.id)}>&#10005;</div>
        </div>
    );

}

const mapDispatchToProps = dispatch => {

    return {

        removeFromCart: (itemId)=>{
            
            return dispatch(removeFromCart(itemId));

        },
        addItemToCart: (item)=>{
            
            return dispatch(addItemToCart(item));

        },
        reduceItem: (itemId)=>{

            return dispatch(reduceItem(itemId));

        }

    }

}

export default connect(null,mapDispatchToProps)(CheckoutItem);