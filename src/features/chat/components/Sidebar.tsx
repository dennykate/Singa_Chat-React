import Friends from "./sidebar/Friends";
import SidebarFooter from "./sidebar/SidebarFooter";
import SidebarHeader from "./sidebar/SidebarHeader";

interface PropsType {
  setShowFriends: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<PropsType> = ({ setShowFriends }) => {
  return (
    <div className="w-full h-full border-r border-black border-opacity-10 bg-white">
      <SidebarHeader onClose={() => setShowFriends(false)} />

      <Friends />

      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
