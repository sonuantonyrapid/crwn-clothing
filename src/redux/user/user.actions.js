import userActionTypes from "./user.action.types";

export const googleSignInStart = () => {
    return ({
        type:userActionTypes.GOOGLE_SIGN_IN_START,
    });
}

export const emailSignInStart = (emailAndPassword) => {
    return ({
        type:userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    });
}

export const signInSuccess = user => {
    return (
        {
            type: userActionTypes.SIGN_IN_SUCCESS,
            payload: user
        }
    );
};

export const signInFailure = error => {
    return (
        {
            type: userActionTypes.SIGN_IN_FAILURE,
            payload: error
        }
    );
};