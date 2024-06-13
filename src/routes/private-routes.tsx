import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Chat = lazy(() => import("@/features/chat/Chat"));

const publicRoutes = [
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "*",
    element: <Navigate to={"/chat"} />,
  },
];

export default publicRoutes;
