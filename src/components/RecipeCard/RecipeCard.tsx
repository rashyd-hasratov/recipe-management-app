import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { BASE_PATH } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { actions as savedRecipesActions } from '../../features/savedRecipes';
import { actions as favoriteRecipesActions } from '../../features/favoriteRecipes';
import { Recipe } from "../../types/Recipe";

import styles from './RecipeCard.module.scss';

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({
  recipe,
}: RecipeCardProps) => {
  const {
    id,
    title,
    description,
    ingredients,
    instructions,
    imageUrl,
  } = recipe;

  const dispatch = useAppDispatch();
  const savedRecipes = useAppSelector(state => state.savedRecipes);
  const favoriteRecipes = useAppSelector(state => state.favoriteRecipes);

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

            <p className={styles.info_text}>
              {ingredients.join(', ')}
            </p>
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
          <Link
            to={`${BASE_PATH}/${id}`}
            className={classNames(
              styles.actions_button,
              styles.actions_button_details
            )}
          >
            Details
          </Link>

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
        </div>
      </div>
    </div>
  );
};