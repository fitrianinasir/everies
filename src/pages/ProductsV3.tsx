import { useGetProducts } from "@/hooks/services/useGetProducts";
import { TProduct } from "@/lib/model";
import { cn } from "@/lib/utils";
import { THomeProducts } from "@/services/response";
import React from "react";
import ProductCard from "./product/ProductCard";
import { Button } from "@/components/ui/button";
import ProductHighlight from "./product/ProductHighlight";
import { useWindowSize } from "@/hooks/useWindowSize";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductsV3 = () => {
  const { width } = useWindowSize();
  const { data: newArrival } = useGetProducts<TProduct[]>({
    newArrivals: true,
  });

  const { data: products } = useGetProducts<THomeProducts>({
    newArrivals: false,
  });

  const displayProduct = (data: TProduct[]) => {
    return width < 748
      ? data?.slice(1)
      : width > 1048
        ? data?.slice(1)
        : data?.slice(1, 5);
  };
  return (
    <div className="relative space-y-20 lg:space-y-32">
      <div className="space-y-2">
        <p className="tracking-widest font-semibold text-everies-primary-30">
          Our Products
        </p>
        <h1 className="text-4xl font-semibold text-everies-primary-10">
          New Arrival
        </h1>
        <div className="flex mt-12 w-screen max-w-[1440px]  flex-row flex-nowrap gap-6 overflow-auto scrollbar-hide">
          {newArrival?.data?.map((product) => (
            <div className="flex-none">
              <ProductCard key={product.id} data={product} newArrival />
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      {Object.keys(products?.data || []).map((category, list) => (
        <>
          <BannerCatagory
            key={category}
            category={category as keyof THomeProducts}
          />
          <div className="space-y-6">
            <div
              className={cn(
                "flex flex-col md:flex-row gap-10",
                ["jewellery", "bags"].includes(category.toLocaleLowerCase()) &&
                  "md:flex-row-reverse",
              )}
            >
              <div className="w-full lg:w-[800px] xl:w-[550px] h-full">
                <ProductHighlight
                  data={
                    (
                      products?.data[
                        category as keyof THomeProducts
                      ] as TProduct[]
                    )?.[0]
                  }
                />
              </div>
              <div className="grid w-full grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {displayProduct(
                  (products?.data[category as keyof THomeProducts] ||
                    []) as TProduct[],
                ).map((product) => (
                  <ProductCard data={product} key={product.id} />
                ))}
              </div>
            </div>
            <div className="hidden md:block xl:hidden">
              <div className="grid w-full grid-cols-4 gap-4 sm:gap-6">
                {(products?.data[category as keyof THomeProducts] as TProduct[])
                  ?.slice(5)
                  .map((product) => (
                    <ProductCard data={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default ProductsV3;

const BannerCatagory = ({ category }: { category: keyof THomeProducts }) => {
  const { width } = useWindowSize();
  switch (category) {
    case "clothes":
      return (
        <div
          className="w-full relative max-w-[1440px] h-[400px] lg:h-[500px] bg-top bg-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: `url("https://4kwallpapers.com/images/walls/thumbs_3t/24658.jpg")`,
          }}
        >
          <div className="absolute text-xl font-semibold lg:text-4xl xl:text-5xl text-center lg:text-left lg:max-w-1/3 text-everies-secondary-10 tracking-widest lg:left-8 lg:top-1/3 inset-0 top-4">
            ELEVATE YOUR STYLE!
          </div>
          <div className="absolute w-full lg:w-1/3 text-center lg:text-right space-y-1 lg:space-y-3 lg:right-8 lg:top-1/3 bottom-4">
            <h1 className="text-sm font-bold lg:text-xl xl:text-3xl text-everies-secondary-10 tracking-widest">
              Final clearance sale up to 30% off!
            </h1>
            <Button variant="secondary" size={width < 748 ? "default" : "lg"}>
              SHOP NOW!
            </Button>
          </div>
        </div>
      );
    case "jewellery":
      return (
        <div className="h-96 sm:h-[500px] flex flex-col lg:flex-row gap-6 w-full">
          <div
            className="w-full lg:w-3/4 flex justify-end items-center h-full bg-center rounded-md bg-cover transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url("/images/jewellery-banner.jpg")`,
            }}
          >
            <div className="text-xs space-y-1 sm:space-y-4 text-everies-secondary-10 tracking-wider w-2/5 text-right mr-4 xl:mr-12">
              <p className="text-lg sm:text-3xl xl:text-4xl 2xl:text-5xl text-everies-secondary-40 tracking-widest font-nova">
                EVERIES JEWELLERIES
              </p>
              <p className="text-2xs sm:text-sm xl:text-base">
                Where timeless beauty meets modern elegance — wear the sparkle
                that tells your story.
              </p>
            </div>
          </div>
          <div className="grid w-full lg:w-1/4 gap-6 grid-cols-2 h-full lg:grid-cols-1">
            <div
              className="w-full relative h-full bg-center rounded-md bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("/images/jewellery-banner3.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Trendy necklace collections
              </p>
            </div>
            <div
              className="w-full relative h-full bg-center rounded-md bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("/images/jewellery-banner2.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                The ring that defines timeless elegance
              </p>
            </div>
          </div>
        </div>
      );
    case "shoes":
      return (
        <div className="flex flex-col sm:flex-row gap-6   w-full">
          <div
            className="w-full h-72 lg:h-96 relative -full bg-bottom rounded-md bg-cover transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url("https://i.pinimg.com/1200x/5e/08/09/5e0809d7bbde0b16b8420b853d3c569c.jpg")`,
            }}
          >
            <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
              Shoes that turn moments into milestones
            </p>
          </div>
          <div
            className="w-full relative h-72 lg:h-96 bg-center rounded-md bg-cover transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url("https://i.pinimg.com/1200x/dc/d3/0a/dcd30adf945bf1495aea9579e0d98d27.jpg")`,
            }}
          >
            <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
              Your comfy shoes, your timeless signature
            </p>
          </div>
        </div>
      );
    case "bags":
      return (
        <Swiper
          slidesPerView={width < 748 ? 2 : 3}
          spaceBetween={0}
          className="mySwiper"
          freeMode={true}
          autoplay={{ delay: 0 }}
          speed={4000}
          loop
          modules={[Autoplay]}
        >
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/1200x/7b/73/21/7b7321719961f61a85900e6e1748dbd5.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                A bag that carries elegance everywhere
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/1200x/b4/83/6f/b4836f7a345b5f2e0d1fe7c3de19c5d0.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Your bag, your timeless statement of style
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/736x/a5/0b/9c/a50b9c50dbffd2b69c9681f02b73f37d.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Bags made to match every vibe
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/1200x/03/8f/8d/038f8d01c7e753c577d558fd4340fcd2.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Every bag holds a story worth carrying
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/736x/36/c8/1f/36c81f2b4be4cc82748cabb708ad227b.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Designed for every day, made for you
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="w-full h-60 md:h-96 relative bg-center bg-cover transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://i.pinimg.com/736x/3e/f3/4a/3ef34a04e740f5ee996aac3d39d9036e.jpg")`,
              }}
            >
              <p className="text-xs text-center px-1 flex justify-center items-center text-everies-secondary-10 tracking-wider absolute bg-black/30 inset-0">
                Bags built for hustle, styled for life
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      );
    default:
      return <div className=""></div>;
  }
};
