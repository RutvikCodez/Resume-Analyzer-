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
    <main className="h-screen bg-background grid grid-cols-[1fr_4fr]">
      <Sidebar />
      {children}
    </main>
  );
};

export default layout;
