import { cn } from "@/lib/utils";
import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import { Montserrat, Bitcount_Grid_Double, Michroma } from "next/font/google";
import { useRouter } from "next/router";
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

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  backUrl?: string;
}
const Layout = ({ backUrl, children, className, ...props }: LayoutProps) => {
  const router = useRouter();
  return (
    <main
      className={cn(
        "flex flex-col justify-center items-center w-full",
        monsterrat.className
      )}
      {...props}
    >
      <Navbar backUrl={backUrl} />
      {router.pathname === "/" && (
        <div className="bg-everies-secondary-10 w-full">
          <Banner />
        </div>
      )}
      <div className={cn("w-full p-4 sm:p-8", className)}>{children}</div>
    </main>
  );
};

export default Layout;
