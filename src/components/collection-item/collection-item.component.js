import React from "react";
import "./collection-item.styles.scss";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";


const CollectionItem = props => {

    const addItemHandler = (item) => {

        props.addItemToCart(item);
        alert('done');

    }

    return (
        <div className="collection-item">
            <div className="image"
            style={{
                backgroundImage:`url(${props.item.imageUrl})`
            }}
            >
                <div className="collection-footer">
                    <span className="name">
                        {props.item.name}
                    </span>
                    <span className="price">
                        $ {props.item.price}
                    </span>
                </div>
                <CustomButton className="custom-button" onClick={()=>addItemHandler(props.item)} inverted>Add to cart</CustomButton>
            </div>
        </div>
    );

};

const mapStateToProps = state => {

    return ({
        cartItems:state.cart.cartItems
    });
  
}

const mapDispatchToProps = dispatch => {

    return({
        addItemToCart: (item)=>{
            return dispatch(addItemToCart(item));
        }
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);