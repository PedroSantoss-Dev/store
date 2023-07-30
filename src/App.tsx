import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { favoriteScreensRoutes } from './modules/favorite/routes';
import { firstScreensRoutes } from './modules/firstScreens/routes';
import { homeScreensRoutes } from './modules/home/router';
import { loginScreensRoutes } from './modules/loginScreen/router';

const App = () => {
  const routes: RouteObject[] = [
    ...firstScreensRoutes,
    ...favoriteScreensRoutes,
    ...loginScreensRoutes,
    ...homeScreensRoutes,
  ];
  const router: RemixRouter = createBrowserRouter([...routes]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
