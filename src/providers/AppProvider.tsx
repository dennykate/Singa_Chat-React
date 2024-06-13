import config from "@/config/config";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { EncryptProvider } from "use-encrypt-storage";

interface PropsType {
  children: React.ReactNode;
}

const AppProvider: React.FC<PropsType> = ({ children }) => {
  return (
    <BrowserRouter>
      <EncryptProvider secretKey={config.encryptStorageSecretKey}>
        <GoogleOAuthProvider clientId={config.googleClientID}>
          {children}
          <ToastContainer theme="light" />
        </GoogleOAuthProvider>
      </EncryptProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
