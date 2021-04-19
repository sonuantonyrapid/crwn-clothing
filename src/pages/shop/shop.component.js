import React,{Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {fireStore,convertCollectionsSpanshotToMap} from "../../fiebase/fiebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";


// import SHOP_DATA from "../../redux/shop/shop.data";

class ShopPage extends Component{

    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const collectionRef = fireStore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {

            const collections = convertCollectionsSpanshotToMap(snapshot);

            console.log(collections);

            this.props.updateCollections(collections);
            
        });

    }

    render(){

        const {match} = this.props;

        return (
            <div className="shop-page">
                <Route exact path={match.path} component={CollectionOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );

    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collections => {
            return dispatch(updateCollections(collections));
        }
    }
}


export default connect(null,mapDispatchToProps)(ShopPage);