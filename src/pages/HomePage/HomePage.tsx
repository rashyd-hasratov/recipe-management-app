import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RecipeList } from '../../components/RecipeList';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const recipes = useAppSelector(state => state.recipes);
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const visibleRecipes = recipes.filter(({ title, ingredients }) => {
    const titleLowercased = title.toLocaleLowerCase();
    const ingredientsLowercased = ingredients.map(ingredient => (
      ingredient.toLocaleLowerCase()
    ));
    const queryLowercased = query.toLocaleLowerCase();

    return titleLowercased.includes(queryLowercased)
      || ingredientsLowercased.some(ingredient => ingredient.includes(queryLowercased));
  })

  return (
    <>
      <input
        type='text'
        className={styles.search_input}
        placeholder='Search a recipe...'
        value={query}
        onChange={handleQueryChange}
      />
      <RecipeList recipes={visibleRecipes} />
    </>
  );
};