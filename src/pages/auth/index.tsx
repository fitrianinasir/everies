import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import LoginLottie from "../../../public/animations/ecommerce.json";
import Image from "next/image";
import RegisterForm from "./register-form";
import Layout from "@/components/layout";
import { useAuthStore } from "@/store/useAuthStore";
import LoginForm from "./login-form";
import { useGeneralStore } from "@/store/useGeneralStore";
import LoadingLottie from "@/components/loading";
import Cookies from "js-cookie";
const AuthPage = () => {
  const { section } = useAuthStore((state) => state);
  const { isLoading } = useGeneralStore((state) => state);

  useEffect(() => {
    Cookies.remove("token");
  }, []);

  return (
    <main className="flex-center bg-everies-secondary-10">
      {isLoading && <LoadingLottie />}
      <div className="px-6 w-[1440px] py-12 h-screen flex-center">
        <div className="hidden w-full md:flex flex-col items-center justify-center h-full">
          <div className="flex items-center flex-col">
            <Image
              src="/logo/cover.png"
              alt="Everies"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Lottie
              animationData={LoginLottie}
              loop
              className="h-[28rem] w-[28rem]"
            />
          </div>
          <DownloadAppSection />
        </div>
        <div className="h-screen w-full flex-center flex-col gap-6">
          <Image
            src="/logo/cover.png"
            alt="Everies"
            width={250}
            height={100}
            objectFit="cover"
            className="mb-16 md:hidden"
          />
          {section === "login" ? <LoginForm /> : <RegisterForm />}

          <div className="w-full mt-6 flex-col flex-center md:!hidden">
            <DownloadAppSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;

const DownloadAppSection = () => {
  return (
    <div className="flex gap-6">
      <div className="flex-center bg-white p-3 rounded-xl gap-1">
        <Image src="/icon/apple.png" alt="Apple Store" width={30} height={30} />
        <div>
          <p className="text-xs">Available on</p>
          <p className="text-sm font-semibold">Apple Store</p>
        </div>
      </div>
      <div className="flex-center bg-white p-3 rounded-xl gap-1">
        <Image
          src="/icon/google-play.png"
          alt="Google Play Store"
          width={30}
          height={30}
        />
        <div>
          <p className="text-xs">Available on</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </div>
    </div>
  );
};
