import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getCollectionsForPreview } from "../../redux/shop/shop.selector";
import "./collections-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = props => {

    const collectionsHandler = () => {

        const collection = props.collections.map(({id,...otherCollection})=>{

            return <CollectionPreview key={`collection_${id}`} {...otherCollection}/>

        });

        return collection;

    };

    return (
        <div className="collection-overview">
            {collectionsHandler()}
        </div>
    );

}

const setStateToProps = createStructuredSelector({
    collections:getCollectionsForPreview
});

export default connect(setStateToProps)(CollectionOverview);