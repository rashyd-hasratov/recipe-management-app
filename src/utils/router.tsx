import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { HomePage } from '../pages/HomePage';
import { SavedPage } from '../pages/SavedPage';
import { RecipePage } from '../pages/RecipePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/recipe-management-app" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='saved' element={<SavedPage />} />
      <Route path=':recipeId' element={<RecipePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>,
  ),
);