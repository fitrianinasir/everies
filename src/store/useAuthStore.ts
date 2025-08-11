import { create } from "zustand";

type TSection = "login" | "register";
type AuthStore = {
  section: TSection;
  setSection: (section: TSection) => void;
};
export const useAuthStore = create<AuthStore>((set) => ({
  section: "login",
  setSection: (section) => set({ section }),
}));
