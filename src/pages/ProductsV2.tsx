import { cn, formatToRupiah } from "@/lib/utils";
import ProductCard from "./product/ProductCard";
import ProductLayout from "@/components/layout.product";
import { useGetProducts } from "@/hooks/services/useGetProducts";
import { useRouter } from "next/router";
import { useState } from "react";
import { THomeProducts } from "@/services/response";
import { TProduct } from "@/lib/model";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, EffectCoverflow } from "swiper/modules";
import { useWindowSize } from "@/hooks/useWindowSize";
const ProductsV2 = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: newArrival } = useGetProducts<TProduct[]>({
    newArrivals: true,
  });

  const { data: products } = useGetProducts<THomeProducts>({
    newArrivals: false,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("clothes");

  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <ProductLayout className="space-y-28">
      <div className="space-y-14">
        <div className="space-y-2">
          <h1 className={cn("font-bold text-2xl lg:text-4xl font-michroma")}>
            New Arrivals
          </h1>
          <p className="text-xs lg:text-base max-w-lg">
            New arrivals dropping now! Fresh styles for the fashion-forward
            woman.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={width < 576 ? 1 : width > 848 ? 3 : 2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}

          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {newArrival?.data.map((i, index) => (
            <SwiperSlide>
              <div
                className="max-w-xl relative w-full h-96 sm:h-80 xl:h-96 rounded-2xl  bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${i.preview_img})`,
                }}
              ></div>
              {activeIndex === index && (
                <div className="absolute space-y-0.5 bottom-2 text-everies-primary-20 rounded-lg text-xs bg-everies-secondary-10/30 p-2 right-2 text-right w-[calc(100%-32px)]">
                  <p>{i.name}</p>
                  <p className="font-semibold">{formatToRupiah(i.price)}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center gap-12 flex-col">
        <div className="flex capitalize flex-row gap-3">
          {Object.keys(products?.data || []).map((category, list) => (
            <p
              className={cn(
                "cursor-pointer",
                selectedCategory === category
                  ? "text-everies-primary-30 font-semibold scale-105"
                  : "text-gray-400/80"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
        <div
          className={cn(
            "max-w-xl grid gap-x-4 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 w-full"
          )}
        >
          {(products?.data[selectedCategory as keyof THomeProducts] || []).map(
            (product) => (
              <ProductCard data={product} key={product.id} />
            )
          )}
        </div>
      </div>
      <div className="">Show More ..</div>
    </ProductLayout>
  );
};

export default ProductsV2;
