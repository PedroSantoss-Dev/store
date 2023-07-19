import { RouteObject } from 'react-router-dom';

import FavoriteScreen from './screen/favoriteScreen';

export const favoriteScreensRoutes: RouteObject[] = [
  {
    path: '/favorite',
    element: <FavoriteScreen />,
  },
];
