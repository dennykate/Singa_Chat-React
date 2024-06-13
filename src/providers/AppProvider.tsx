import config from "@/config/config";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface PropsType {
  children: React.ReactNode;
}

const AppProvider: React.FC<PropsType> = ({ children }) => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={config.GOOGLE_OAUTH_CLIENT_ID}>
        {children}
        <ToastContainer theme="light" />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
