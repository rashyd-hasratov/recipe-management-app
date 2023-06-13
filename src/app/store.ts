import { configureStore } from '@reduxjs/toolkit';

import recipesReducer from '../features/recipes';
import savedRecipesReducer from '../features/savedRecipes';
import favoriteRecipesReducer from '../features/favoriteRecipes';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    savedRecipes: savedRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;