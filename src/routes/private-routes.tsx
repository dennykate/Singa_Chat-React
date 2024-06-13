import Wrapper from "@/components/custom/common/Wrapper";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Chat = lazy(() => import("@/features/chat/Chat"));

const publicRoutes = [
  {
    path: "/chat",
    element: (
      <Wrapper>
        <Chat />
      </Wrapper>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/chat"} />,
  },
];

export default publicRoutes;
