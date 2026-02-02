"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";

const NavLink = ({ href, title, icon }: navLinksType) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[icon];
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all justify-between",
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            isActive ? "text-sidebar-primary-foreground" : "text-current",
          )}
        />
        <span className="text-sm font-medium">{title}</span>
      </div>
    </Link>
  );
};

export default NavLink;
