import React,{ useEffect,lazy,Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";

// import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
// import CollectionContainer from "../collection/collection.container";

const CollectionOverviewContainer = lazy(()=>import("../../components/collection-overview/collection-overview.container"));
const CollectionContainer = lazy(()=>import("../collection/collection.container"));
// import SHOP_DATA from "../../redux/shop/shop.data";

const ShopPage = (props) => {


    const {fetchCollectionsStart, match} = props;

    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return (
        <div className="shop-page">
        <Suspense fallback={<Spinner />}>
            <Route exact path={match.path} component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer} />
         </Suspense>
        </div>
    );


}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart: () => {
            return dispatch(fetchCollectionsStart());
        }
    }
}


export default connect(null,mapDispatchToProps)(ShopPage);