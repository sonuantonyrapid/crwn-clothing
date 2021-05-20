import React, { Component } from "react";
import { connect } from "react-redux";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";

import CustonButton from "../custom-button/custom-button.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";


class SignIn extends Component {

    state = {
        'email':'',
        'password':''
    }

    submitHandler = async (event) => {
        event.preventDefault();
        this.props.emailSignInStart({
            email:this.state.email,
            password:this.state.password
        });
    };

    changeHandler = (event) =>{

        let value = event.target.value;

        value = value.trim();

        this.setState({[event.target.name]:value});

    }

    render() {
        
        const {googleSignInStart} = this.props;

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput key="form-email" label="Email" name="email" type="email" handelChange={this.changeHandler} value={this.state.email} required/>
                    <FormInput key="form-password" label="Password" name="password" type="password" handelChange={this.changeHandler} value={this.state.password} required/>
                    <div className="buttons">
                        <CustonButton type="submit">
                            Sign in
                        </CustonButton>
                        <CustonButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign in with google
                        </CustonButton>
                    </div>
                </form>
            </div>
        );
       
    }

}

const mapDispatchToProps = dispatch => {

    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
    }

}

export default connect(null,mapDispatchToProps)(SignIn);