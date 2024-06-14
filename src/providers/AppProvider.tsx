import config from "@/lib/config/config";
import store from "@/lib/redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <EncryptProvider secretKey={config.encryptStorageSecretKey}>
          <GoogleOAuthProvider clientId={config.googleClientID}>
            {children}
            <ToastContainer theme="light" />
          </GoogleOAuthProvider>
        </EncryptProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;
