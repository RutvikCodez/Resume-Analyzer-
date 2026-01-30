import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const syncUser = async () => {
  const user = await currentUser();
  if (!user) return;
  const exists = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!exists) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
        image: user.imageUrl,
      },
    });
    return null
  }
  return exists
};
