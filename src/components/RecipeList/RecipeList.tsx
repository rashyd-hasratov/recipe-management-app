import { Recipe } from '../../types/Recipe';
import { RecipeCard } from '../RecipeCard';

import styles from './RecipeList.module.scss';

type RecipeListProps = {
  recipes: Recipe[];
};

export const RecipeList = ({
  recipes
}: RecipeListProps) => {
  return (
    <div className={styles.list}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};