import React,{ Component } from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustonButton from "../custom-button/custom-button.component";

import { auth,createUserProfileDocument } from "../../fiebase/fiebase.utils";


class SignUp extends Component{

    state = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };

    handleSubmit = async event=>{

        event.preventDefault();

        if(this.state.password !== this.state.confirmPassword){
            alert("Passwords don't match!");
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);

            await createUserProfileDocument({...user,displayName:this.state.displayName});

            alert('signed up successfully');

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }
        catch(error){

            console.error(error);

        }

    };

    changeHandler = event=>{
        const {name,value} = event.target;

        this.setState({[name]:value.trim()});
    }

    render(){

        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput key="sign-up-name" label="Name" name="displayName" type="text" handelChange={this.changeHandler} value={this.state.displayName} required/>
                <FormInput key="sign-up-email" label="Email" name="email" type="email" handelChange={this.changeHandler} value={this.state.email} required/>
                <FormInput key="sign-up-pass" label="Password" name="password" type="password" handelChange={this.changeHandler} value={this.state.password} required/>
                <FormInput key="sign-up-rpass" label="Confirm password" name="confirmPassword" type="password" handelChange={this.changeHandler} value={this.state.confirmPassword} required/>
                <CustonButton type="submit">SIGN UP</CustonButton>
                </form>
            </div>
        );

    }

}

export default SignUp;