import Friends from "./sidebar/Friends";
import SidebarFooter from "./sidebar/SidebarFooter";
import SidebarHeader from "./sidebar/SidebarHeader";

const Sidebar = () => {
  return (
    <div className="w-[300px] h-full border-r border-black border-opacity-10">
      <SidebarHeader />
      <Friends />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
