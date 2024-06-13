import { jwtDecode } from "jwt-decode";
import { useEncryptStorage } from "use-encrypt-storage";

interface DecodedToken {
  exp: number;
  // Add other properties of your token here if needed
}

const useAuth = () => {
  const { get } = useEncryptStorage();
  const accessToken = get("access_token");

  if (!accessToken) {
    return false; // Handle the case where the access token is not available
  }

  const user = jwtDecode<DecodedToken>(accessToken);
  const isExpired =
    new Date(user.exp * 1000).getTime() - new Date().getTime() < 1;

  if (isExpired) return false;
  else return true;
};

export default useAuth;
