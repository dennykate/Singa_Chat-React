import { toast } from "react-toastify";

const unsupportedAction = () => {
  toast.warn("Unfortunately, this feature is not supported yet.");
};

export default unsupportedAction;
