import { RouteObject } from 'react-router-dom';

import FirstScreen from './screen/firstScreen';

export const firstScreensRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
  },
];
