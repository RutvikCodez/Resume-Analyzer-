import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { syncUser } from "@/lib/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await currentUser()
  if (!user) redirect("/");
  await syncUser();
  return (
    <div className="h-screen bg-background grid grid-cols-[1fr_4fr]">
      <Sidebar />
      <div className="flex-1 flex-col flex overflow-clip md:ml-0 min-h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default layout;
