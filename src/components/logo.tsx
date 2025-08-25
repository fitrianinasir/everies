import Image from "next/image";
import React from "react";
import PrimaryLogo from "../../public/logo/primary.png";
import SecondaryLogo from "../../public/logo/secondary.png";

type LogoImageProps = {
  variant?: "primary" | "secondary";
};
const LogoImage = ({ variant = "primary" }: LogoImageProps) => {
  return (
    <Image
      src={variant === "primary" ? PrimaryLogo : SecondaryLogo}
      width={100}
      height={100}
      alt="Everies"
    />
  );
};

export default LogoImage;
