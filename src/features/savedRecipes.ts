import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Recipe } from "../types/Recipe"
import { actions as favoriteRecipesActions } from './favoriteRecipes';

const savedRecipesFromLocalStorage = JSON.parse(
  localStorage.getItem('savedRecipes') || '[]'
);

type RecipeUpdatePayload = {
  recipeId: string;
  dataToUpdate: Partial<Omit<Recipe, 'id'>>;
};

const savedRecipesSlice = createSlice({
  name: 'savedRecipes',
  initialState: savedRecipesFromLocalStorage as Recipe[],
  reducers: {
    add: (recipes, action: PayloadAction<Recipe>) => {
      recipes.push(action.payload);
      localStorage.setItem('savedRecipes', JSON.stringify(recipes));
      
      return recipes;
    },
    remove: (recipes, action: PayloadAction<string>) => {
      const newRecipes = recipes.filter(({ id }) => id !== action.payload);
      localStorage.setItem('savedRecipes', JSON.stringify(newRecipes));

      return newRecipes;
    },
    update: (recipes, action: PayloadAction<RecipeUpdatePayload>) => {
      const newRecipes = recipes.map(recipe => {
        if (recipe.id === action.payload.recipeId) {
          return {...recipe, ...action.payload.dataToUpdate};
        }
  
        return recipe;
      });
      localStorage.setItem('savedRecipes', JSON.stringify(newRecipes));

      return newRecipes;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(favoriteRecipesActions.add, (recipes, action) => {
      if (!recipes.some(({ id }) => id === action.payload.id)) {
        recipes.push(action.payload);
        localStorage.setItem('savedRecipes', JSON.stringify(recipes));
      }
      
      return recipes;
    });
  },
});

export default savedRecipesSlice.reducer;
export const { actions } = savedRecipesSlice;