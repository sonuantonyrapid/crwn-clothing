import React,{Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {fireStore,convertCollectionsSpanshotToMap} from "../../fiebase/fiebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


// import SHOP_DATA from "../../redux/shop/shop.data";

class ShopPage extends Component{

    state = {
        loading:true
    };


    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const collectionRef = fireStore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {

            const collections = convertCollectionsSpanshotToMap(snapshot);

            this.props.updateCollections(collections);
            this.setState({loading:false});
            
        });

    }

    render(){

        const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
        const CollectionPageWithSpinner = WithSpinner(CollectionPage);

        const {match} = this.props;

        return (
            <div className="shop-page">
                <Route exact path={match.path} render={
                    (props)=><CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>
                } />
                <Route exact path={`${match.path}/:collectionId`} render={
                    (props)=>(<CollectionPageWithSpinner isLoading={this.state.loading} {...props} />)
                    } />
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