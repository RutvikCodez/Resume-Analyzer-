import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { syncUser } from "@/lib/auth";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const userExists = await syncUser();
  if (!userExists) return;
  return (
    <div className="h-screen bg-background grid grid-cols-[1fr_4fr]">
      <Sidebar />
      <div className="flex-1 flex-col flex overflow-clip md:ml-0">
      <Header />
      {children}
      </div>
    </div>
  );
};

export default layout;
