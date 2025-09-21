import React, { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  maxStock: number | undefined;
  onIncrementHandler?: () => void;
  onDecrementHandler?: () => void;
};
const CounterMedium = ({ count, setCount, maxStock }: CounterProps) => {
  return (
    <div>
      <div className="flex flex-row gap-2 text-lg font-extrabold text-everies-pink-10">
        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className={cn(
            "cursor-pointer",
            count === 0 && "pointer-events-none text-gray-400"
          )}
        >
          -
        </button>
        <div className="w-14">
          <input
            className="h-8 w-full rounded-md border-2 border-everies-pink-10 text-center text-xs font-extrabold outline-none"
            value={count.toString()}
            onChange={(e) => {
              if (maxStock) {
                if (parseInt(e.target.value) > maxStock) {
                  setCount(maxStock);
                  return;
                }
              }
              setCount(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <button className="cursor-pointer" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <span
        className={cn(
          "text-3xs text-red-800",
          count === maxStock ? "flex" : "hidden h-5"
        )}
      >
        *Anda hanya dapat memesan dengan batas maksimum {maxStock} item
      </span>
    </div>
  );
};

const CounterSmall = ({
  count,
  setCount,
  maxStock,
  onIncrementHandler,
  onDecrementHandler,
}: CounterProps) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-1 text-lg text-everies-pink-10 md:gap-2">
        <button
          onClick={() => {
            count > 0 && setCount(count - 1);
            onDecrementHandler && onDecrementHandler();
          }}
          className={cn(count === 0 && "pointer-events-none text-gray-400")}
        >
          -
        </button>
        <div className="w-10 md:w-14">
          <input
            className="h-6 w-full rounded-md border-2 border-everies-pink-10 text-center text-xs font-bold outline-none md:h-8 md:font-extrabold"
            value={count.toString()}
            onChange={(e) => {
              if (parseInt(e.target.value) > 100) {
                setCount(100);
                return;
              }
              setCount(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
            onIncrementHandler && onIncrementHandler();
          }}
        >
          +
        </button>
      </div>
      <span
        className={cn(
          "text-3xs text-red-800",
          count === 100 ? "flex" : "hidden h-5"
        )}
      >
        *Anda hanya dapat memesan dengan batas maksimum 100 item
      </span>
    </div>
  );
};

export { CounterMedium, CounterSmall };
