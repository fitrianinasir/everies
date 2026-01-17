import { cn } from "@/lib/utils";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Banner = () => {
  const [hoverButton, setHoverButton] = useState(false);

  const tabList = ["clothes", "jewellery", "bags", "shoes"];

  return (
    <div className="relative h-screen w-screen max-w-[2440px] max-h-[960px] bg-[url('/images/bannernew3.jpg')] sm:bg-center bg-no-repeat bg-cover">
      <div className="bg-black/70 z-0 absolute inset-0"></div>
      <div className="absolute px-6 flex flex-col bottom-36 gap-6 justify-start items-start w-full z-0">
        <div className="text-left">
          <TextHoverEffect text="EVERIES" />
          <p className="text-everies-secondary-10 opacity-45 max-w-lg p-3 text-sm">
            From everyday essentials to statement pieces, shop fashion made to
            inspire confidence and elegance.
          </p>
        </div>
        <div
          className="py-2 px-4 flex justify-center items-center gap-2 ml-3 rounded-full hover:scale-110 cursor-pointer transition-all hover:bg-gradient-to-r hover:from-everies-primary-30 hover:to-everies-primary-10 active:scale-100 hover:text-everies-secondary-10 bg-everies-secondary-10"
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
        >
          <p>Shop now</p>
          <div
            className={cn(
              "p-1 rounded-full",
              hoverButton ? "bg-everies-secondary-10" : "bg-everies-primary-30"
            )}
          >
            <MdKeyboardDoubleArrowRight
              className={cn(
                "size-5",
                hoverButton
                  ? "text-everies-primary-10 animate-wiggle scale-120"
                  : "text-everies-secondary-10"
              )}
            />
          </div>
        </div>
      </div>
      <div className="grid w-full gap-6 absolute bottom-4 px-6 text-everies-secondary-10 grid-cols-4">
        {tabList.map((tab, index) => (
          <div
            key={tab}
            className={cn(
              "flex flex-col cursor-pointer border-t p-4 border-everies-secondary-10 opacity-45 hover:opacity-100 hover:border-t-2"
            )}
          >
            <p>0{index + 1}</p>
            <p>{tab.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
