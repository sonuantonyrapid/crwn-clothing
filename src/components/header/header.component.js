import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { auth } from "../../fiebase/fiebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import { getCurrentUser } from "../../redux/user/user.selector";


const Header = props => {

    return (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
            props.currentUser?<div className="option" onClick={() => auth.signOut()}>Sign out</div>:<Link className="option" to="/sign-in">Sign in</Link>
            }
            <CartIcon />
        </div>
    </div>
    );

};

const mapStateToProps = state => {

    return ({

        currentUser: getCurrentUser(state)

    })

}

export default connect(mapStateToProps)(Header);