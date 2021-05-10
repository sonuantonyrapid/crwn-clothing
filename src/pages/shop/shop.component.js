import React,{Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching,selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


// import SHOP_DATA from "../../redux/shop/shop.data";

class ShopPage extends Component{

    componentDidMount(){

        const {fetchCollectionsStartAsync} = this.props;

        fetchCollectionsStartAsync();

    }

    render(){

        const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
        const CollectionPageWithSpinner = WithSpinner(CollectionPage);

        const {match, isCollectionFetching, isCollectionLoaded} = this.props;

        return (
            <div className="shop-page">
                <Route exact path={match.path} render={
                    (props)=><CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
                } />
                <Route exact path={`${match.path}/:collectionId`} render={
                    (props)=>(<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)
                    } />
            </div>
        );

    }

}

const mapStateToProps = createStructuredSelector(
    {
        isCollectionFetching:selectIsCollectionFetching,
        isCollectionLoaded:selectIsCollectionLoaded
    }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStartAsync: () => {
            return dispatch(fetchCollectionsStartAsync());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);