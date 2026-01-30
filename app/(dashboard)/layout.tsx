import { syncUser } from "@/lib/auth";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await syncUser()
  return <div>{children}</div>;
};

export default layout;
