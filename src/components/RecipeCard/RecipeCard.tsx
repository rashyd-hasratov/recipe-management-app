import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { actions as savedRecipesActions } from '../../features/savedRecipes';
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

  const handleSaveClick = () => {
    const isSaved = savedRecipes.some(recipe => recipe.id === id);

    if (isSaved) {
      dispatch(savedRecipesActions.remove(id));
    } else {
      dispatch(savedRecipesActions.add(recipe));
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
        <h3>
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
              {ingredients}
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
          <button className={styles.actions_button}>Details</button>

          <button
            className={styles.actions_button}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};