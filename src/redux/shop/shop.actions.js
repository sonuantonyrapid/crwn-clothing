import ShopActionType from "./shop.types";

export const updateCollections = (collections) => {
    return {
        type:ShopActionType.UPDATE_COLLECTIONS,
        payload:collections
    };
}