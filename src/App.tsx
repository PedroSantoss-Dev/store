import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firstScreensRoutes } from './modules/firstScreens/routes';
import { loginScreensRoutes } from './modules/loginScreen/router';

const App = () => {
  const routes: RouteObject[] = [...firstScreensRoutes, ...loginScreensRoutes];
  const router: RemixRouter = createBrowserRouter([...routes]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
