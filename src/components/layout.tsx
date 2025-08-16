import { cn } from "@/lib/utils";
import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import { Montserrat, Bitcount_Grid_Double, Michroma } from "next/font/google";
export const monsterrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const bitcount = Bitcount_Grid_Double({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const Layout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main
      className={cn(
        "flex justify-center items-center w-full bg-everies-secondary-10",
        monsterrat.className,
        className
      )}
      {...props}
    >
      <div className="max-w-[1440px] w-screen">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
