import Layout from "@/components/layout";
import Products from "./Products";
import { GetServerSidePropsContext } from "next";
import AdminPage from "./(admin)/AdminPage";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ProductsV2 from "./ProductsV2";
import ProductsV3 from "./ProductsV3";
import { Funnel_Sans, Montserrat, Nova_Flat } from "next/font/google";

export const monsterrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const nova = Nova_Flat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nova",
});

export const funnelSans = Funnel_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-sans",
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const role = req.cookies.role || null;
  return {
    props: { role },
  };
}

export default function Home({ role }: { role: string | null }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const top = bannerRef.current.getBoundingClientRect().top;

      // Show navbar only when banner is scrolled past top
      setShowNavbar(top < 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center w-full",
        nova.variable,
        funnelSans.variable,
      )}
      onScroll={(e) => console.log(e)}
    >
      <Navbar
        className={cn(
          "transition-all ease-in-out duration-300",
          showNavbar ? "bg-everies-secondary-10" : "bg-transparent",
        )}
        showCategories={showNavbar}
      />

      <div ref={bannerRef} className="w-full flex-center bg-white">
        <Banner />
      </div>
      <div className="w-full max-w-[1440px] p-4 sm:p-8">
        <ProductsV3 />
      </div>
    </div>
  );
}
