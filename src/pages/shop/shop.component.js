import React,{ Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends Component{

    state = {
        collections:SHOP_DATA
    }

    collectionsHandler = () => {

        const collection = this.state.collections.map(({id,...otherCollection})=>{

            return <CollectionPreview key={`collection_${id}`} {...otherCollection}/>

        });

        return collection;

    };

    render(){
        return (
            <div className="shop-page">
                {this.collectionsHandler()}
            </div>
            );
    }

}

export default ShopPage;