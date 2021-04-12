import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop = (state) => {
    return state.shop
}

export const getCollection = createSelector(
    [selectShop],
    (shop)=>{
        return shop.collections;
    }
);

export const getCollectionsForPreview = createSelector(
    [getCollection],
    (Collections)=>{
        return Object.keys(Collections).map(key=>{
            return Collections[key];
        })
    }
);

export const selectCollection = memoize((collectionUrlParam)=>{

    return createSelector(
        [getCollection],
        (collections)=>{

            return collections[collectionUrlParam];

        }
    );

});  