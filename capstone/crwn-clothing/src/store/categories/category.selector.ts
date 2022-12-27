import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state): CategoriesState => state.categories;

// return the categories array
export const selectCategories = createSelector(
  // what slice do i want from the state?
  [selectCategoryReducer], // whatever this is gets passed into the function bellow
  // only time this function will run is if the input value (^) changes
  (categoriesSlice) => categoriesSlice.categories, // output
);

export const selectCategoriesMap = createSelector(
  /* as long as this (˅) has not changed, don't bother rerunning it,
    just give me the previously calculated value */
  [selectCategories], 
  (categories): CategoryMap => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap),
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);