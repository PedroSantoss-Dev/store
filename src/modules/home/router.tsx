import { RouteObject } from 'react-router-dom';

import HomeScreen from './screens/homeScreen';

export const homeScreensRoutes: RouteObject[] = [
  {
    path: '/home',
    element: <HomeScreen />,
  },
];
