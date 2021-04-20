import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { createStructuredSelector } from "reselect";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = props => {

    const {collection} = props;
    const { title,items } = collection;

    console.log(collection);

    const getItems = () => {
        const element = items.map(item=>{
            return <CollectionItem key={item.id} item={item}/>
        });

        return element;
    }

    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {getItems()}
            </div>
        </div>
    );

}

const mapStateToProps = (state,ownProps)=>{
    return {
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default withRouter(connect(mapStateToProps)(CollectionPage));