"use client";
import {
  FileText,
  Fingerprint,
  GalleryVerticalEnd,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavProjects } from "@/components/dashboard/nav-projects";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

export function AppSidebar() {
  const { user } = useUser();
  const data = {
    teams: [
      {
        name: "CareerForge AI",
        logo: GalleryVerticalEnd,
        plan: "Mock Interview Platform",
      },
    ],
    navMain: [
      {
        title: "Interview",
        url: "#",
        icon: Fingerprint,
        isActive: true,
        items: [
          {
            title: "Dashboard",
            url: "/interview",
          },
          {
            title: "Generate",
            url: "/generate",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Resume",
        url: "/resume",
        icon: FileText,
      },
      {
        name: "Analyzer",
        url: "/analyzer",
        icon: Wrench,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">CareerForge AI</span>
                <span className="truncate text-xs">
                  Mock Interview Platform
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
