import { syncUser } from "@/lib/auth";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const userExists = await syncUser()
  if (!userExists) return
  return <div>{children}</div>;
};

export default layout;
