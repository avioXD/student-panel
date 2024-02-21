import { User } from "@/models/user/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: "user",
    }
  )
);
