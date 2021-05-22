import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";

import CustonButton from "../custom-button/custom-button.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";


const SignIn = (props) => {

    const [signInInfo,setSignInInfo] = useState({
        email:'',
        password:''
    });

    const { googleSignInStart,emailSignInStart } = props;
    const { email,password } = signInInfo;
  

    const submitHandler = async (event) => {
        event.preventDefault();
        emailSignInStart({ email,password });
    };

    const changeHandler = (event) =>{

        let value = event.target.value;

        value = value.trim();

        setSignInInfo(previousState=>({
            ...previousState,
            [event.target.name]:value
        }));

    }  

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={submitHandler}>
                    <FormInput key="form-email" label="Email" name="email" type="email" handelChange={changeHandler} value={email} required/>
                    <FormInput key="form-password" label="Password" name="password" type="password" handelChange={changeHandler} value={password} required/>
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

const mapDispatchToProps = dispatch => {

    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
    }

}

export default connect(null,mapDispatchToProps)(SignIn);