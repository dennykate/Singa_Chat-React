import Wrapper from "@/components/custom/common/Wrapper";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Authentication = lazy(
  () => import("@/features/authentication/Authentication")
);

const publicRoutes = [
  {
    path: "/auth",
    element: (
      <Wrapper>
        <Authentication />
      </Wrapper>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/auth"} />,
  },
];

export default publicRoutes;
