import { useRoutes } from "react-router-dom";

import privateRoutes from "./private-routes";
import publicRoutes from "./public-routes";

const Routes = () => {
  const isAuthenticated = true;

  const routes = isAuthenticated ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Routes;
