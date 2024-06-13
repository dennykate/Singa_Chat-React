import { Suspense } from "react";
import Loader from "./Loader";

interface PropsType {
  children: React.ReactNode;
}

const Wrapper: React.FC<PropsType> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <Loader size={32} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Wrapper;
