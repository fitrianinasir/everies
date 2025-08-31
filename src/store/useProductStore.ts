import { TProduct, TProductDetail } from "@/lib/model";
import { create } from "zustand";

type ProductStore = {
  product: TProductDetail;
  setProduct: (product: TProductDetail) => void;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  mobileImagesPreview: boolean;
  setMobileImagesPreview: (value: boolean) => void;
};
export const useProductStore = create<ProductStore>((set) => ({
  product: {} as TProductDetail,
  setProduct: (product) => set({ product }),
  activeImageIndex: 0,
  setActiveImageIndex: (index) => set({ activeImageIndex: index }),
  mobileImagesPreview: false,
  setMobileImagesPreview: (value) => set({ mobileImagesPreview: value }),
}));
