import Friends from "./sidebar/Friends";
import SidebarFooter from "./sidebar/SidebarFooter";
import SidebarHeader from "./sidebar/SidebarHeader";

interface PropsType {}

const Sidebar: React.FC<PropsType> = () => {
  return (
    <div className="w-full h-full border-r border-black border-opacity-10 bg-white">
      <SidebarHeader />

      <Friends />

      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
