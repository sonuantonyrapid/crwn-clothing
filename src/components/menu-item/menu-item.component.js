import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = props => {

    return (
    <Link to={props.linkUrl} className="section-link">
        <div
        className={`${props.size} menu-item`}
        >
            <div 

            style={{
                backgroundImage:`url(${props.imageUrl})`
            }} 
        
            className="img-back">
                
            </div>
                <div className="content">
                        <h1 className="title">
                            {props.title.toUpperCase()}
                        </h1>
                        <span className="subtitle">
                            Shop Now
                        </span>
                </div>
        </div>
    </Link>
);

};

export default MenuItem;