import React,{ useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustonButton from "../custom-button/custom-button.component";

// import { auth,createUserProfileDocument } from "../../fiebase/fiebase.utils";

import { createUserStart } from "../../redux/user/user.actions";

const SignUp = (props) => {

    const [userDetails,setUserDetails] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const { createUserStart } = props;
    const { displayName,email,password,confirmPassword } = userDetails;

    const handleSubmit = async event=>{

        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match!");
            return;
        }

        createUserStart({email,password,displayName});

        // try{

        //     const {user} = await auth.createUserWithEmailAndPassword(state.email,state.password);

        //     await createUserProfileDocument({...user,displayName:state.displayName});

        //     alert('signed up successfully');

        //     setState({
        //         displayName:'',
        //         email:'',
        //         password:'',
        //         confirmPassword:''
        //     });

        // }
        // catch(error){

        //     console.error(error);

        // }

    };

    const changeHandler = event=>{
        const {name,value} = event.target;

        setUserDetails(previousState=>({
            ...previousState,
            [name]:value.trim()
            }));
    }

        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput key="sign-up-name" label="Name" name="displayName" type="text" handelChange={changeHandler} value={displayName} required/>
                <FormInput key="sign-up-email" label="Email" name="email" type="email" handelChange={changeHandler} value={email} required/>
                <FormInput key="sign-up-pass" label="Password" name="password" type="password" handelChange={changeHandler} value={password} required/>
                <FormInput key="sign-up-rpass" label="Confirm password" name="confirmPassword" type="password" handelChange={changeHandler} value={confirmPassword} required/>
                <CustonButton type="submit">SIGN UP</CustonButton>
                </form>
            </div>
        );

}

const mapDispatchToProps = dispatch => {
    return {
        createUserStart: (userDetails)=>dispatch(createUserStart(userDetails))
    };
}

export default connect(null,mapDispatchToProps)(SignUp);