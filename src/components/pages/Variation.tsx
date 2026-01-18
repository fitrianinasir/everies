import { TVariationByColor, TVariationBySize } from "@/lib/model";
import { cn } from "@/lib/utils";
import { useProductStore } from "@/store/useProductStore";
import Image from "next/image";
import React, { useState } from "react";

export interface VariationProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: TVariationByColor[];
  size?: "small" | "default";
}
export interface SizeProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: TVariationBySize[];
}

const VariationColor = React.forwardRef<HTMLDivElement, VariationProps>(
  ({ variation, size = "default", className, ...props }, ref) => {
    const { selectedColor, setSelectedColor, selectedSize } = useProductStore();
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1 text-left md:gap-3", className)}
        {...props}
      >
        <p className="text-base text-everies-primary-20">Variasi</p>
        <div className="flex flex-row gap-3">
          {variation?.map((i, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  " flex cursor-pointer flex-row items-center md:flex-col gap-1",
                  (i.is_sold_out || i.stock[selectedSize] === 0) &&
                    "pointer-events-none border-none opacity-50",
                  selectedColor === i.color &&
                    "border pr-1 rounded-xs md:border-none border-everies-primary-20",
                )}
                onClick={() => {
                  if (i.color === selectedColor) {
                    setSelectedColor("");
                  } else {
                    setSelectedColor(i.color);
                  }
                }}
              >
                <Image
                  src={i.preview_img}
                  alt="Blazer1"
                  width={100}
                  height={100}
                  className={cn(
                    "size-10 md:size-20 object-cover",
                    selectedColor === i.color &&
                      "md:rounded-sm md:border-2 md:border-everies-primary-20",
                  )}
                />
                <p
                  className={cn(
                    "text-xs block font-normal capitalize text-everies-primary-20",
                    (i.is_sold_out || i.stock[selectedSize] === 0) &&
                      "text-everies-dark-30",
                  )}
                >
                  {i.color}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

const VariationSize = React.forwardRef<HTMLDivElement, SizeProps>(
  ({ variation, className, ...props }, ref) => {
    const { selectedColor, setSelectedColor, selectedSize, setSelectedSize } =
      useProductStore();
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1 text-left md:gap-3", className)}
        {...props}
      >
        <p className="text-base text-everies-primary-20">Size</p>
        <div className="flex flex-row gap-5">
          {variation?.map((i, idx) => (
            <div
              key={idx}
              className={cn(
                "flex h-6 w-16 cursor-pointer items-center justify-center bg-everies-secondary-10 text-xs",

                selectedSize === i.size &&
                  "rounded-sm border md:border-2 border-everies-primary-20",
                (i.is_sold_out || i.stock[selectedColor] === 0) &&
                  "pointer-events-none border-none opacity-50",
              )}
              onClick={() => {
                if (selectedSize === i.size) {
                  setSelectedSize("");
                } else {
                  setSelectedSize(i.size);
                }
              }}
            >
              {i.size}
            </div>
          ))}
        </div>
      </div>
    );
  },
);
export { VariationColor, VariationSize };
