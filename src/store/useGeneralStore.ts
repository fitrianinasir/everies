import { create } from "zustand";
type GeneralStore = {
  bagCounter: number;
  setBagCounter: (bagCounter: number) => void;
  isBagShaking: boolean;
  setIsBagShaking: (isBagShaking: boolean) => void;
};
export const useGeneralStore = create<GeneralStore>((set) => ({
  bagCounter: 0,
  setBagCounter: (bagCounter) => set({ bagCounter }),
  isBagShaking: false,
  setIsBagShaking: (isBagShaking) => set({ isBagShaking }),
}));
