import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";


const mapStateToProps = createStructuredSelector(
    {
        isLoading:selectIsCollectionFetching,
    }
);

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;