import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { RecipeList } from '../../components/RecipeList';

import styles from './HomePage.module.scss';
import commonStyles from '../../styles/Common.module.scss';

export const HomePage = () => {
  const recipes = useAppSelector(state => state.recipes);

  // useEffect(() => {
  //   if (!recipes.length) {
  //     dispatch(recipesActions.init());
  //   }

  //   if(!savedRecipes) {
  //     const savedRecipesFromLocalStorage = JSON.parse(
  //       localStorage.getItem('savedRecipes') || '[]'
  //     );

  //     dispatch(savedRecipesActions.init(savedRecipesFromLocalStorage));
  //   }
  // }, []);

  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};