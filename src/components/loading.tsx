import React from "react";
import Loading from "../../public/animations/loading.json";
import Lottie from "lottie-react";
const LoadingLottie = () => {
  return (
    <div className="w-screen fixed h-screen bg-everies-primary-10/30 z-50 flex items-center justify-center">
      <Lottie animationData={Loading} loop className="h-[20rem] w-[20rem]" />
    </div>
  );
};

export default LoadingLottie;
