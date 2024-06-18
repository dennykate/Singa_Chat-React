import { useRoutes } from "react-router-dom";

import privateRoutes from "./private-routes";
import publicRoutes from "./public-routes";
import useAuth from "@/hooks/use-auth";
import commonRoutes from "./common-routes";

const Routes = () => {
  const isAuthenticated = useAuth();

  const routes = isAuthenticated ? privateRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

export default Routes;
