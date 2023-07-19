import type { Router as RemixRouter } from '@remix-run/router';
import { useState } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { favoriteScreensRoutes } from './modules/favorite/routes';
import { firstScreensRoutes } from './modules/firstScreens/routes';
import { homeScreensRoutes } from './modules/home/router';
import { loginScreensRoutes } from './modules/loginScreen/router';
import { Header } from './shared/components/header/header';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routes: RouteObject[] = [
    ...firstScreensRoutes,
    ...favoriteScreensRoutes,
    ...loginScreensRoutes,
    ...homeScreensRoutes,
  ];
  const router: RemixRouter = createBrowserRouter([...routes]);
  return (
    <>
      <Header toggle={toggle} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
