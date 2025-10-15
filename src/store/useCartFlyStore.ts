// stores/useCartFlyStore.ts
import { create } from "zustand";

type FlyPayload = {
  from: DOMRect;
  to: DOMRect;
  width: number;
  height: number;
  img: string;
};

type CartFlyState = {
  flyPayload: FlyPayload | null;
  triggerFly: (payload: FlyPayload) => void;
  clearFly: () => void;
  flyValue: string;
  setFlyValue: (val: string) => void;
};

export const useCartFlyStore = create<CartFlyState>((set) => ({
  flyPayload: null,
  triggerFly: (flyPayload) => set({ flyPayload }),
  clearFly: () => set({ flyPayload: null }),
  flyValue: "",
  setFlyValue: (flyValue) => set({ flyValue }),
}));
