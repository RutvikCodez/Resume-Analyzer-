import { AppSidebar } from "@/components/dashboard/utils/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { syncUser } from "@/lib/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await currentUser();
  if (!user) redirect("/");
  await syncUser();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-5">{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
