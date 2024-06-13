import { ImSpinner2 } from "react-icons/im";

interface PropsType {
  size?: number;
}

const Loader: React.FC<PropsType> = ({ size = 20 }) => {
  return <ImSpinner2 size={size} className="text-primary animate-spin" />;
};

export default Loader;
