import Image from "next/image";
import React from "react";
import PrimaryLogo from "../../public/logo/primary.png";
import SecondaryLogo from "../../public/logo/secondary.png";
import { useRouter } from "next/router";

type LogoImageProps = {
  variant?: "primary" | "secondary";
};
const LogoImage = ({ variant = "primary" }: LogoImageProps) => {
  const router = useRouter();
  return (
    <Image
      src={variant === "primary" ? PrimaryLogo : SecondaryLogo}
      width={variant === "primary" ? 100 : 150}
      height={variant === "primary" ? 100 : 150}
      alt="Everies"
      className="cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};

export default LogoImage;
