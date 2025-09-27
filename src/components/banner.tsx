import React from "react";
import Lottie from "lottie-react";
import Shop from "../../public/animations/shop.json";
import { Button } from "./ui/button";
import Image from "next/image";
import BannerImg from "../../public/images/banner2.png";

import { cn } from "@/lib/utils";
import { bitcount } from "./layout";
import { AiFillShopping } from "react-icons/ai";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {}
const Banner = () => {
  return (
    <div className="relative h-[calc(100vh-48px)] w-full max-w-[1440px] gap-6 flex-col  bg-[url('/images/banner2.png')] bg-no-repeat bg-position-[center_top_15rem] bg-contain flex items-center justify-start">
      <div className="flex flex-col gap-4 items-center mt-28">
        <h1
          className={cn(
            "text-6xl tracking-[12px] text-everies-primary-10"
            // monsterrat.className
          )}
        >
          SUPER BRAND DAY
        </h1>
        <h2 className="text-lg tracking-widest bg-everies-primary-20 text-everies-light-10 rounded-full px-6 py-2">
          Special discount up to 62%
        </h2>
      </div>
      <div className="absolute bottom-48 flex flex-row justify-between items-center w-full max-w-[calc(100%-120px)]">
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
