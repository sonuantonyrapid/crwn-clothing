import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = props =>{

    const collectionItemHandler = () => {

        let count = 0;

        const filteredData = props.items.filter(()=>{

            count += 1;

            return count <= 4;

        }).map(({id,...products})=>{

            return <CollectionItem key={`collection-item-${id}`} {...products} />

        });

        return filteredData;

    };

    return (
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {collectionItemHandler()}
            </div>
        </div>
    );

}

export default CollectionPreview;