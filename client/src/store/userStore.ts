import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  _id: string;
  username: string;
  email: string;
  token: string;
  tokenExpiry: number;
}

interface IUserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useUserStore = create<IUserStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => {
        set({ user });
      },
      logout: () => {
        set({ user: null });
      },
      isAuthenticated: () => {
        const user = get().user;
        return !!user && user.tokenExpiry > Date.now();
      },
    }),
    {
      name: "user-store",
    }
  )
);
