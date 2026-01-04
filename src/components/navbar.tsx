import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiSearch } from "react-icons/fi";
import { RiNotification2Fill, RiNotification2Line } from "react-icons/ri";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { GoPerson, GoPersonFill } from "react-icons/go";
import { CgShoppingBag } from "react-icons/cg";
import { useWindowSize } from "@uidotdev/usehooks";
import MobileSidebar from "./sidebar";
import LogoImage from "./logo";
import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
type NavbarProps = {
  backUrl?: string;
  className?: string;
  showCategories?: boolean;
};
const Navbar = ({ backUrl, className, showCategories = true }: NavbarProps) => {
  const { width } = useWindowSize();
  const token = Cookies.get("token");
  const [searchActive, setSearchActive] = useState(false);

  const router = useRouter();

  const submenuClassnames =
    "hover:font-bold hover:text-everies-secondary-30 cursor-pointer";
  return (
    <>
      <div
        className={cn(
          "fixed w-screen text-xs h-12 z-50 top-0 flex justify-center items-center p-8 bg-everies-secondary-10",
          showCategories ? "p-8" : "p-10",
          className
        )}
      >
        <div className="flex flex-row w-full items-center justify-between max-w-[1440px]">
          {width && width > 576 && showCategories ? (
            <div className="flex items-end justify-center flex-row gap-3">
              <LogoImage />
              <p
                className={cn("ml-4", submenuClassnames)}
                onClick={() => router.push("/clothes")}
              >
                CLOTHES
              </p>
              <p
                className={submenuClassnames}
                onClick={() => router.push("/jewellery")}
              >
                JEWELLERY
              </p>
              <p
                className={submenuClassnames}
                onClick={() => router.push("/bags")}
              >
                BAGS
              </p>
              <p
                className={submenuClassnames}
                onClick={() => router.push("/shoes")}
              >
                SHOES
              </p>
            </div>
          ) : !backUrl ? (
            <LogoImage variant={showCategories ? "primary" : "secondary"} />
          ) : (
            <button
              className="flex flex-row items-center gap-1 text-sm"
              onClick={() => router.push(backUrl)}
            >
              <IoMdArrowBack /> <span>Back</span>
            </button>
          )}
          {width && width > 576 ? (
            token ? (
              <div className="flex items-center justify-center flex-row gap-3">
                <div
                  className="flex flex-row items-center justify-center bg-everies-secondary-40 p-1.5 text-everies-primary-20 rounded-full cursor-pointer"
                  onClick={() => setSearchActive(true)}
                >
                  <FiSearch className="size-4" />
                </div>
                <Popover>
                  <PopoverTrigger>
                    <RiNotification2Line className="size-5 text-everies-primary-20" />
                  </PopoverTrigger>
                  <PopoverContent className="mr-4">HENLO</PopoverContent>
                </Popover>
                <CgShoppingBag
                  id="cart-icon"
                  className="text-everies-primary-20 size-5 cursor-pointer"
                  onClick={() => router.push("/bag")}
                />
                <Popover>
                  <PopoverTrigger>
                    <GoPerson className="text-everies-primary-20 size-5 cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <button
                      className="cursor-pointer"
                      onClick={() => (window.location.href = "/auth")}
                    >
                      Logout
                    </button>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Button onClick={() => (window.location.href = "/auth")}>
                LOGIN
              </Button>
            )
          ) : (
            <MobileSidebar />
          )}
        </div>
      </div>
      {searchActive && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center w-screen h-screen bg-everies-primary-10/30 backdrop-blur-xs z-40"
          onClick={() => setSearchActive(false)}
        >
          <div
            className="w-3/5 text-center flex flex-col gap-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-4xl text-white font-semibold tracking-widest">
              What are you looking for?
            </h1>
            <Input placeholder="Search..." className="rounded-xl shadow-xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
