import React from "react";

import "./form-input.styles.scss";

const FormInput = ({handelChange,label,...inputProps}) => {

    return(
        <div className="group">
            <input className="form-input" onChange={handelChange} {...inputProps}/>
            {
                label ? <label className={`${inputProps.value.length?'shrink':null} form-input-label`}>{label}</label>:null
            }
        </div>
    );

}

export default FormInput;