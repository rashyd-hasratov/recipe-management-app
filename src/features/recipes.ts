import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { recipes as initialData } from '../testData/recipes';
import { Recipe } from '../types/Recipe';

type RecipeUpdatePayload = {
  recipeId: string;
  dataToUpdate: Partial<Omit<Recipe, 'id'>>;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialData,
  reducers: {
    add: (recipes, action: PayloadAction<Recipe>) => { recipes.push(action.payload) },
    remove: (recipes, action: PayloadAction<string>) => recipes.filter(({ id }) => id !== action.payload),
    update: (recipes, action: PayloadAction<RecipeUpdatePayload>) => recipes.map(recipe => {
      if (recipe.id === action.payload.recipeId) {
        return {...recipe, ...action.payload.dataToUpdate};
      }

      return recipe;
    }),
  },
});

export default recipesSlice.reducer;
export const { actions } = recipesSlice;