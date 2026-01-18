import React, { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  maxStock: number | undefined;
  onIncrementHandler?: () => void;
  onDecrementHandler?: () => void;
};
const CounterMedium = ({ quantity, setQuantity, maxStock }: CounterProps) => {
  return (
    <div>
      <div className="flex flex-row gap-2 text-lg font-extrabold text-everies-primary-20">
        <button
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
          className={cn(
            "cursor-pointer",
            quantity === 0 && "pointer-events-none text-gray-400",
          )}
        >
          -
        </button>
        <div className="w-14">
          <input
            className="h-8 w-full rounded-md border-2 border-everies-primary-20 text-center text-xs font-extrabold outline-none"
            value={quantity.toString()}
            onChange={(e) => {
              if (maxStock) {
                if (parseInt(e.target.value) > maxStock) {
                  setQuantity(maxStock);
                  return;
                }
              }
              setQuantity(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <span
        className={cn(
          "text-3xs text-red-800",
          quantity === maxStock ? "flex" : "hidden h-5",
        )}
      >
        *Anda hanya dapat memesan dengan batas maksimum {maxStock} item
      </span>
    </div>
  );
};

const CounterSmall = ({
  quantity,
  setQuantity,
  maxStock,
  onIncrementHandler,
  onDecrementHandler,
}: CounterProps) => {
  return (
    <div>
      <div className="flex flex-row items-end gap-1 text-lg text-everies-primary-20 md:gap-2">
        <button
          onClick={() => {
            quantity > 0 && setQuantity(quantity - 1);
            onDecrementHandler && onDecrementHandler();
          }}
          className={cn(
            "cursor-pointer",
            quantity === 0 && "pointer-events-none text-everies-dark-10/10",
          )}
        >
          -
        </button>
        <div className="w-10 md:w-14">
          <input
            className="h-6 w-full rounded-md border-2 border-everies-primary-20 text-center text-base outline-none md:h-8"
            value={quantity.toString()}
            onChange={(e) => {
              if (parseInt(e.target.value) > 100) {
                setQuantity(100);
                return;
              }
              setQuantity(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <button
          className="cursor-pointer"
          onClick={() => {
            setQuantity(quantity + 1);
            onIncrementHandler && onIncrementHandler();
          }}
        >
          +
        </button>
      </div>
      <span
        className={cn(
          "text-3xs text-red-800",
          quantity === 100 ? "flex" : "hidden h-5",
        )}
      >
        *Anda hanya dapat memesan dengan batas maksimum 100 item
      </span>
    </div>
  );
};

export { CounterMedium, CounterSmall };
