import { RouteObject } from 'react-router-dom';

import LoginScreen from './screen/loginScreen';

export const loginScreensRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
