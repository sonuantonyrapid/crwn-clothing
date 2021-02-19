import React from "react";

import "./custom-button.styles.scss";

const CustonButton = ({children,...otherProps}) => {

    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    );

};

export default CustonButton;