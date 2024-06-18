import Wrapper from "@/components/custom/common/Wrapper";
import { lazy } from "react";

const InstalltionGuide = lazy(
  () => import("@/features/installation-guide/InstalltionGuide")
);

const commonRoutes = [
  {
    path: "/installation-guide",
    element: (
      <Wrapper>
        <InstalltionGuide />
      </Wrapper>
    ),
  },
];

export default commonRoutes;
