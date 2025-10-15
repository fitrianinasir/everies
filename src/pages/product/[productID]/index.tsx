import Layout from "@/components/layout";
import { DummyProduct } from "@/lib/dummy";
import GeneratedStars from "@/lib/generateStars";
import {
  cn,
  formatToRupiah,
  maxStockHandler,
  variationByColorHandler,
  variationBySizeHandler,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/useProductStore";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaStar } from "react-icons/fa6";
import ReviewDetail from "./ReviewDetail";
import { BsBag } from "react-icons/bs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TVariationByColor, TVariationBySize } from "@/lib/model";
import {
  VariationColor,
  VariationSize,
} from "../../../components/pages/Variation";
import { CounterMedium, CounterSmall } from "@/components/pages/Counter";
import { Button } from "@/components/ui/button";
import useAddToCartHandler from "@/hooks/useAddToCart";
import ImagesSection from "./ImagesSection";
import Footer from "./Footer";
import { useCartFlyStore } from "@/store/useCartFlyStore";

const ProductDetail = () => {
  const { width } = useWindowSize();
  const [isFavorite, setIsFavorite] = useState(false);
  const dummyData = DummyProduct; // Assuming you want to display the first product's details
  const { setProduct, selectedColor, selectedSize } = useProductStore(
    (state) => state
  );
  const { handleAddToCart } = useAddToCartHandler();

  const [count, setCount] = useState<number>(1);
  const [maxStock, setMaxStock] = useState<number | undefined>();
  const [variationByColor, setVariationByColor] = useState<TVariationByColor[]>(
    []
  );
  const [variationBySize, setVariationBySize] = useState<TVariationBySize[]>(
    []
  );

  useEffect(() => {
    setProduct(dummyData);
    setVariationByColor(variationByColorHandler(dummyData.variation_by_color));
    setVariationBySize(variationBySizeHandler(dummyData.variation_by_size));
  }, [dummyData]);

  useEffect(() => {
    setMaxStock(
      maxStockHandler({
        colors: variationByColor || [],
        selectedColor: selectedColor,
        selectedSize: selectedSize,
      })
    );
  }, [selectedColor, selectedSize]);

  const ReviewSection = () => (
    <>
      <div>
        <h1 className="font-bold text-xs sm:text-sm text-everies-pink-20">
          Penilaian Produk
        </h1>
        <div className="flex text-2xs items-center mt-1 flex-row gap-1 font-semibold">
          <FaStar className="size-4 sm:size-5  text-yellow-400" />
          <span> {dummyData.rate}/5.0 | 1.5k orang memberikan penilaian</span>
        </div>
      </div>
      <ReviewDetail />
      <ReviewDetail />
      <ReviewDetail />
    </>
  );

  useEffect(() => {
    console.log("selectedColor", selectedColor);
  }, [selectedColor]);

  const mobileSize = 576;

  const { triggerFly, setFlyValue } = useCartFlyStore((s) => s);

  const handleClick = () => {
    const fromEl = document.getElementById("add-to-bag-btn");
    const toEl = document.getElementById("cart-icon");

    if (fromEl && toEl) {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      setFlyValue(dummyData.img[0]);
      triggerFly({
        from: fromRect,
        to: toRect,
        width: fromRect.width,
        height: fromRect.height,
        img: dummyData.img[0],
      });
    }
  };

  return (
    <Layout className="sm:pb-8 pb-16 mt-16" backUrl="/">
      <div className="flex flex-col sm:flex-row gap-4 sm:mb-10">
        <ImagesSection id="image-section" className="" />
        <div className="col-span-2 flex flex-col w-full gap-1">
          <div className="flex flex-col justify-between md:justify-normal gap-5 h-full pb-5 sm:pb-0">
            {/* TITLE SECTION */}
            <div className="max-w-xl space-y-3">
              <div className="flex flex-row justify-between">
                <div>
                  <h1 className="font-bold text-sm md:text-xl">
                    {dummyData.name}
                  </h1>
                  <div className="flex flex-row gap-2 items-center">
                    <GeneratedStars
                      stars={dummyData.rate}
                      size={width >= 576 ? "default" : "small"}
                    />
                    <span className="text-xs font-semibold text-gray-500">
                      {dummyData.sold} Sold
                    </span>
                  </div>
                </div>
                {isFavorite ? (
                  <MdFavorite
                    className="size-5 text-everies-pink-10 cursor-pointer"
                    onClick={() => setIsFavorite(false)}
                  />
                ) : (
                  <MdFavoriteBorder
                    className="size-5 text-everies-pink-10 cursor-pointer"
                    onClick={() => setIsFavorite(true)}
                  />
                )}
              </div>
              <p className="bg-everies-pink-20  text-everies-dark-30 rounded-xl px-4 py-3 font-bold text-sm md:text-base">
                {formatToRupiah(dummyData.price)}
              </p>
              <VariationColor variation={variationByColor} />
              <VariationSize variation={variationBySize} />
            </div>
            {width >= mobileSize && (
              <div className="flex text-sm flex-col gap-3">
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 max-w-fit">
                  <p className="h1-bold">Atur Kuantitas</p>
                  <p className="h1-bold">Subtotal</p>
                  <CounterSmall
                    count={count}
                    setCount={setCount}
                    maxStock={maxStock}
                  />
                  <div className="text-everies-pink-20 font-extrabold flex items-end">
                    {formatToRupiah(count * (dummyData?.price || 0))}
                  </div>
                </div>
                <div className="flex flex-row gap-5 max-w-sm">
                  <Button
                    onClick={handleClick}
                    variant="secondary"
                    className={cn(
                      "flex cursor-pointer items-center text-xs font-semibold hover:scale-110"
                    )}
                  >
                    ADD TO BAG{" "}
                    <BsBag className="size-4 text-everies-primary-20" />
                  </Button>
                  <Button className="cursor-pointer text-xs font-semibold hover:scale-110">
                    BUY NOW
                  </Button>
                </div>
              </div>
            )}
          </div>
          {width < 576 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-everies-pink-20">
                  Deskripsi
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur autem atque reprehenderit perspiciatis harum,
                  nihil quam aliquid quos et officiis repellat iusto, quod
                  laboriosam eveniet id sequi qui illo provident.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {width < 576 && <ReviewSection />}
        </div>
      </div>
      {width >= 576 && (
        <>
          <div className="mb-5">
            <h1 className="font-bold text-sm text-everies-pink-20">
              Deskripsi
            </h1>
            <span className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo
              sequi, blanditiis harum nemo commodi omnis sunt aut qui
              consectetur repudiandae laudantium deleniti maxime perferendis hic
              architecto totam beatae dolore.
            </span>
          </div>
          <ReviewSection />
        </>
      )}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {width < mobileSize && (
        <Footer
          variationByColor={variationByColor}
          variationBySize={variationBySize}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;
