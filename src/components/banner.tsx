const Banner = () => {
  return (
    <div className="relative h-[31rem] xl:h-[32rem] w-screen max-w-[1440px] bg-[url('/images/bannernew3.jpg')] sm:bg-center bg-position-[center_left_-12vw] bg-no-repeat bg-cover  flex items-center justify-start">
      <div className="sm:hidden bg-black/40 z-0 absolute inset-0"></div>
      <div className="absolute flex justify-center items-center sm:justify-end bottom-12 sm:right-12 xl:right-1/10 sm:top-1/2 sm:bottom-1/2 w-full z-50">
        <div className="text-center sm:text-right">
          <p
            className="font-meddon text-5xl md:text-7xl xl:text-8xl p-3 bg-gradient-to-r from-everies-secondary-40 to-everies-secondary-50 sm:from-everies-primary-30 sm:to-everies-primary-20
           bg-clip-text text-transparent"
          >
            Everies
          </p>
          <p className="text-everies-secondary-10 px-3 text-sm sm:text-everies-primary-20 xl:text-xl">
            Fashion Collection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
