import useInitChat from "@/services/use-init-chat";

interface PropsType {
  children: React.ReactNode;
}

const AuthContainer: React.FC<PropsType> = ({ children }) => {
  useInitChat();

  return <main>{children}</main>;
};

export default AuthContainer;
