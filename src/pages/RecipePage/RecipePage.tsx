import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { actions as savedRecipesActions } from '../../features/savedRecipes';
import { actions as favoriteRecipesActions } from '../../features/favoriteRecipes';

import styles from './RecipePage.module.scss';

export const RecipePage = () => {
  const { pathname } = useLocation();
  const recipeId = pathname.slice(1);

  const dispatch = useAppDispatch();
  const recipes = useAppSelector(state => state.recipes);
  const savedRecipes = useAppSelector(state => state.savedRecipes);
  const favoriteRecipes = useAppSelector(state => state.favoriteRecipes);

  const [isCookingMode, setIsCookingMode] = useState(false);

  const recipe = recipes.find(({ id }) => id === recipeId);

  if (!recipe) {
    return <h1>Recipe Not Found</h1>;
  }

  const {
    id,
    title,
    description,
    ingredients,
    instructions,
    imageUrl,
  } = recipe;

  const isSaved = savedRecipes.some(recipe => recipe.id === id);
  const isFavorite = favoriteRecipes.some(recipe => recipe.id === id);

  const handleSaveClick = () => {
    if (isSaved) {
      dispatch(savedRecipesActions.remove(id));
    } else {
      dispatch(savedRecipesActions.add(recipe));
    }
  }

  const handleFavoritesClick = () => {
    if (isFavorite) {
      dispatch(favoriteRecipesActions.remove(id));
    } else {
      dispatch(favoriteRecipesActions.add(recipe));
    }
  }

  const handleStartCookingClick = () => {
    setIsCookingMode(current => !current);
  };

  return (
    <div className={styles.recipe}>
      <div className={styles.image_container}>
        {imageUrl && (
          <img
            className={styles.image}
            src={imageUrl}
            alt={title}
          /> 
        )}
      </div>

      <div className={styles.main_content}>
        <h3 className={styles.title}>
          {title}
        </h3>
        
        <div className={styles.info}>
          <div className={styles.info_item}>
            <p className={styles.info_item_title}>
              Description
            </p>

            <p className={styles.info_text}>
              {description}
            </p>
          </div>

          <div className={styles.info_item}>
            <p className={styles.info_item_title}>
              Ingredients
            </p>

            {isCookingMode
              ? (
                ingredients.map(ingredient => (
                  <div>
                    {ingredient}
                  </div>
                ))
              )
              : (
                <p className={styles.info_text}>
                  {ingredients.join(', ')}
                </p>
              )
            }
          </div>

          <div className={styles.info_item}>
            <p className={styles.info_item_title}>
              Instructions
            </p>

            <p className={styles.info_text}>
              {instructions}
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={classNames(
              styles.actions_button,
              styles.actions_button_save,
              { [styles.actions_button_save_saved]: isSaved },
            )}
            onClick={handleSaveClick}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>

          <button
            className={classNames(
              styles.actions_button,
              styles.actions_button_favorite,
            )}
            onClick={handleFavoritesClick}
          >
            {isFavorite ? 'Added to favorites' : 'Add to favorites'}
          </button>

          <button
            className={styles.actions_button}
            onClick={handleStartCookingClick}
          >
            Start Cooking
          </button>
        </div>
      </div>
    </div>
  );
};