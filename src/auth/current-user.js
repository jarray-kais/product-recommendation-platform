import { baseAuth } from "./auth";

export const currentUser = async () => {
  const session = await baseAuth();

  if (!session?.user) {
    return null; // User is not authenticated
  }

  const user = session.user;

  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};