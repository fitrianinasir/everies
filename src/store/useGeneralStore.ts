import { create } from "zustand";
type GeneralStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  activeCategory?: string;
  setActiveCategory: (category: string) => void;
  bagCounter: number;
  setBagCounter: (bagCounter: number) => void;
  isBagShaking: boolean;
  setIsBagShaking: (isBagShaking: boolean) => void;
};
export const useGeneralStore = create<GeneralStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  activeCategory: undefined,
  setActiveCategory: (category) => set({ activeCategory: category }),
  bagCounter: 0,
  setBagCounter: (bagCounter) => set({ bagCounter }),
  isBagShaking: false,
  setIsBagShaking: (isBagShaking) => set({ isBagShaking }),
}));
