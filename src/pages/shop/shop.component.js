import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";


// import SHOP_DATA from "../../redux/shop/shop.data";

const ShopPage = props => {

    const {match} = props;

    return (
        <div className="shop-page">
            <Route exact path={match.path} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );

}


export default ShopPage;