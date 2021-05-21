import React from "react";
// import { Link } from "react-router-dom";

import { connect } from "react-redux";

// import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";

import { getCurrentUser } from "../../redux/user/user.selector";

import { signOutStart } from "../../redux/user/user.actions";


const Header = props => {

    const { signOutStart } = props;

    return (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/shop">
                Contact
            </OptionLink>
            {
            props.currentUser?<OptionLink as='div' onClick={signOutStart}>Sign out</OptionLink>:<OptionLink to="/sign-in">Sign in</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
    </HeaderContainer>
    );

};

const mapStateToProps = state => {

    return ({

        currentUser: getCurrentUser(state)

    })

}

const mapDispatchToProps = dispatch => {
    return {
        signOutStart:()=>dispatch(signOutStart()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);