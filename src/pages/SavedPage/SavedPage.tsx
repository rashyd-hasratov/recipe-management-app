import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RecipeList } from '../../components/RecipeList';

import styles from './SavedPage.module.scss';

export const SavedPage = () => {
  const [query, setQuery] = useState('');
  const savedRecipes = useAppSelector(state => state.savedRecipes);
  const favoriteRecipes = useAppSelector(state => state.favoriteRecipes);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const visibleSavedRecipes = savedRecipes.filter(({ title, ingredients }) => {
    const titleLowercased = title.toLocaleLowerCase();
    const ingredientsLowercased = ingredients.map(ingredient => (
      ingredient.toLocaleLowerCase()
    ));
    const queryLowercased = query.toLocaleLowerCase();

    return titleLowercased.includes(queryLowercased)
      || ingredientsLowercased.some(ingredient => ingredient.includes(queryLowercased));
  });

  const visibleFavoriteRecipes = favoriteRecipes.filter(({ title, ingredients }) => {
    const titleLowercased = title.toLocaleLowerCase();
    const ingredientsLowercased = ingredients.map(ingredient => (
      ingredient.toLocaleLowerCase()
    ));
    const queryLowercased = query.toLocaleLowerCase();

    return titleLowercased.includes(queryLowercased)
      || ingredientsLowercased.some(ingredient => ingredient.includes(queryLowercased));
  });

  return (
    <>
      <input
        type='text'
        className={styles.search_input}
        placeholder='Search a recipe...'
        value={query}
        onChange={handleQueryChange}
      />

      <div className={styles.favorite_recipes}>
        <h2 className={styles.recipes_title}>Favorite recipes</h2>
        <RecipeList recipes={visibleFavoriteRecipes} />
      </div>

      <div className={styles.saved_recipes}>
        <h2 className={styles.recipes_title}>Saved recipes</h2>
        <RecipeList recipes={visibleSavedRecipes} />
      </div>
    </>
  );
};