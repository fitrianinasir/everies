import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import LogoImage from "./logo";
import { CgShoppingBag } from "react-icons/cg";
import { motion, useAnimation } from "framer-motion";

const MobileSidebar = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <CgShoppingBag
        id="cart-icon"
        className="text-everies-primary-20 size-4 cursor-pointer"
      />
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu className="size-5" />
        </SheetTrigger>
        <SheetContent className="flex justify-between flex-col text-sm text-everies-light-10 font-extralight">
          <div>
            <LogoImage variant="secondary" />
            <div className="space-y-2 mt-10">
              <p>SHOP</p>
              <p>MEN</p>
              <p>WOMEN</p>
              <p>TRENDING</p>
            </div>
          </div>
          <Button variant="secondary" className="rounded-full">
            LOGIN
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
