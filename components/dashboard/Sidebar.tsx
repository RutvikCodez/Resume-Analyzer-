import { sidebarData } from "@/constants";
import Link from "next/link";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <aside className="bg-sidebar border-r border-sidebar-border transition-all duration-300 overflow-y-auto z-40">
      <div className="flex flex-col h-full">
        <div className="px-6 py-6 border-b border-sidebar-border">
          <Link href="/">
            <span className="font-bold text-lg text-sidebar-foreground">
              CareerForge
            </span>
          </Link>
        </div>
        <nav className="flex-1 flex flex-col gap-2 px-3 py-6">
          {sidebarData.map((item, index) => (
           <NavLink key={index} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
