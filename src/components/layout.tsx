import { cn } from "@/lib/utils";
import React from "react";
import Banner from "./banner";
import {
  Montserrat,
  Michroma,
  Meddon,
  Nova_Flat,
  Funnel_Sans,
} from "next/font/google";
import { useRouter } from "next/router";
import { CartFlyAnimationLayer } from "./pages/CartFlyAnimationLayer";
import Navbar from "./navbar";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  backUrl?: string;
}

export const funnelSans = Funnel_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-sans",
});

const Layout = ({ backUrl, children, className, ...props }: LayoutProps) => {
  const router = useRouter();
  return (
    <main
      className={cn(
        "flex flex-col justify-center items-center w-full font-funnel-sans",
        funnelSans.variable,
      )}
      {...props}
    >
      <Navbar backUrl={backUrl} />
      {router.pathname === "/" && (
        <div className="w-full flex-center bg-white">
          <Banner />
        </div>
      )}
      <div className={cn("w-full max-w-[1440px] p-4 sm:p-8", className)}>
        {children}
      </div>
      <CartFlyAnimationLayer />
    </main>
  );
};

export default Layout;
