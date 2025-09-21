import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TVariationByColor, TVariationBySize } from "./model";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToRupiah(amount: number) {
  // Convert to string and format with commas
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp. ${formattedAmount}`;
}

export function variationByColorHandler(colors: TVariationByColor[]) {
  const variationByColorData = colors.map((i) => {
    const isSoldOut = Object.values(i.stock).every((value) => value === 0);
    return {
      ...i,
      is_sold_out: isSoldOut,
    };
  });

  return variationByColorData;
}

export function variationBySizeHandler(size: TVariationBySize[]) {
  const variationBySizeData = size.map((i) => {
    const isSoldOut = Object.values(i.stock).every((value) => value === 0);
    return {
      ...i,
      is_sold_out: isSoldOut,
    };
  });
  return variationBySizeData;
}

type TMaxStockHandler = {
  colors: TVariationByColor[];
  selectedColor: string;
  selectedSize: string;
};
export function maxStockHandler({
  colors,
  selectedColor,
  selectedSize,
}: TMaxStockHandler) {
  const max = colors?.find((i) => i.color === selectedColor)?.stock[
    selectedSize
  ];
  return max;
}
