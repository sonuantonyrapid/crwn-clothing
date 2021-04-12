import { createSelector } from "reselect";

const selectDirectory = state => {
    return state.directory;
}

export const getSection = createSelector(
    [selectDirectory],
    (directory) => {
        return directory.section;
    }
);