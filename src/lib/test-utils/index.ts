import { User } from "@/models/server/User";

export const cleanDb = async () => {
  await User.deleteMany();
};

export {};
