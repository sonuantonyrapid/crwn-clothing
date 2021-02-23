import React, { Component } from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";

import CustonButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../fiebase/fiebase.utils";


class SignIn extends Component {

    state = {
        'email':'',
        'password':''
    }

    submitHandler = async (event) => {

        event.preventDefault();

        try{

            await auth.signInWithEmailAndPassword(this.state.email,this.state.password);

            alert('signed in successfully');

            this.setState({
                'email':'',
                'password':''
            });

        }
        catch(error){

            console.log(error);

        }
        

    };

    changeHandler = (event) =>{

        let value = event.target.value;

        value = value.trim();

        this.setState({[event.target.name]:value});

    }

    render() {

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
                        <CustonButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </CustonButton>
                    </div>
                </form>
            </div>
        );
       
    }

}

export default SignIn;