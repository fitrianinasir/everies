import React from "react";

import { cn } from "@/lib/utils";
import { bitcount } from "./layout";

const Banner = () => {
  return (
    <div className="relative h-[40vh] xl:h-[50vh] mt-16 w-full max-w-[1440px] gap-6 flex-col bg-[url('/images/banner2.png')] bg-no-repeat bg-position-[center_top_5rem] xl:bg-position-[center_top_5rem] bg-contain flex items-center justify-start">
      <div className="flex h-full justify-between py-8 xl:pt-0 flex-col gap-4 items-center">
        <h1
          className={cn(
            "text-2xl xl:text-6xl tracking-[6px] xl:tracking-[12px] text-everies-primary-10"
          )}
        >
          SUPER BRAND DAY
        </h1>
        <h2 className="text-sm xl:text-lg tracking-widest bg-everies-primary-20 text-everies-light-10 rounded-full px-6 py-2">
          Special discount up to 62%
        </h2>
      </div>
      <div className="absolute bottom-24 xl:bottom-1/3 hidden xl:flex flex-row justify-between items-center w-full max-w-[calc(100%-120px)]">
        <h1
          className={cn(
            "text-4xl cursor-pointer  text-everies-primary-20",
            bitcount.className
          )}
        >
          SHOP <br />
          NOW
        </h1>
        <div
          className={cn(
            "text-4xl text-right font-bitcount flex-center cursor-pointer  text-everies-primary-20",
            bitcount.className
          )}
        >
          {/* <AiFillShopping className="size-10" /> */}
          <div className="w-24 ">
            <span style={{ wordBreak: "break-word" }}>CATEGORIES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
