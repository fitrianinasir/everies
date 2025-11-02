import { TProduct } from "@/lib/model";
import { create } from "zustand";

type ProductStore = {
  product: TProduct;
  setProduct: (product: TProduct) => void;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  mobileImagesPreview: boolean;
  setMobileImagesPreview: (value: boolean) => void;
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
  selectedSize: string;
  setSelectedSize: (selectedSize: string) => void;
};
export const useProductStore = create<ProductStore>((set) => ({
  product: {} as TProduct,
  setProduct: (product) => set({ product }),
  activeImageIndex: 0,
  setActiveImageIndex: (index) => set({ activeImageIndex: index }),
  mobileImagesPreview: false,
  setMobileImagesPreview: (value) => set({ mobileImagesPreview: value }),
  selectedColor: "",
  setSelectedColor: (selectedColor) => set({ selectedColor }),
  selectedSize: "",
  setSelectedSize: (selectedSize) => set({ selectedSize }),
}));
