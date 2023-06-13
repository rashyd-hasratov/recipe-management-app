import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Recipe } from "../types/Recipe"

const favoriteRecipesFromLocalStorage = JSON.parse(
  localStorage.getItem('favoriteRecipes') || '[]'
);

type RecipeUpdatePayload = {
  recipeId: string;
  dataToUpdate: Partial<Omit<Recipe, 'id'>>;
};

const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: favoriteRecipesFromLocalStorage as Recipe[],
  reducers: {
    add: (recipes, action: PayloadAction<Recipe>) => {
      recipes.push(action.payload);
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
      
      return recipes;
    },
    remove: (recipes, action: PayloadAction<string>) => {
      const newRecipes = recipes.filter(({ id }) => id !== action.payload);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipes));

      return newRecipes;
    },
    update: (recipes, action: PayloadAction<RecipeUpdatePayload>) => {
      const newRecipes = recipes.map(recipe => {
        if (recipe.id === action.payload.recipeId) {
          return {...recipe, ...action.payload.dataToUpdate};
        }
  
        return recipe;
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipes));

      return newRecipes;
    }
  },
});

export default favoriteRecipesSlice.reducer;
export const { actions } = favoriteRecipesSlice;