import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

// return the categories array
export const selectCategories = createSelector(
  // what do slice do i want from the state?
  [selectCategoryReducer], // whatever this is gets passed into the function bellow
  // only time this function will run is if the input value (^) changes
  (categoriesSlice) => categoriesSlice.categories // output
);

export const selectCategoriesMap = createSelector(
  /* as long as this (˅) has not changed, don't bother rerunning it,
   * just give me the previously calculated value */
  [selectCategories], 
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);