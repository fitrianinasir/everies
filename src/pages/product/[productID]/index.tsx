import Layout from "@/components/layout";
import ImagesSection from "./ImagesSection";
import { DummyProduct } from "@/lib/dummy";
import GeneratedStars from "@/lib/generateStars";
import { formatToRupiah } from "@/lib/utils";
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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductDetail = () => {
  const { width } = useWindowSize();
  const [isFavorite, setIsFavorite] = useState(false);
  const dummyData = DummyProduct; // Assuming you want to display the first product's details
  const { setProduct } = useProductStore((state) => state);
  useEffect(() => {
    setProduct(dummyData);
  }, [dummyData]);

  const ReviewSection = () => (
    <>
      <div>
        <h1 className="font-bold text-xs sm:text-sm">Penilaian Produk</h1>
        <div className="flex text-2xs items-center flex-row gap-1 font-semibold">
          <FaStar className="size-4 sm:size-5  text-yellow-400" />
          <span> {dummyData.rate}/5.0 | 1.5k orang memberikan penilaian</span>
        </div>
      </div>
      <ReviewDetail />
      <ReviewDetail />
      <ReviewDetail />
    </>
  );
  return (
    <Layout className="p-8">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-10 md:mb-10">
        <ImagesSection className="w-full" />
        <div className="col-span-2 flex flex-col w-full gap-1">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="font-bold text-sm md:text-2xl">
                {dummyData.name}
              </h1>
              <div className="flex flex-row gap-2 items-center">
                <GeneratedStars
                  stars={dummyData.rate}
                  size={width >= 576 ? "default" : "small"}
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
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

          <div className="bg-everies-pink-20 text-everies-dark-30 rounded-xl px-4 py-3 font-bold text-base md:text-2xl">
            {formatToRupiah(dummyData.price)}
          </div>
          {width < 748 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Deskripsi</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur autem atque reprehenderit perspiciatis harum,
                  nihil quam aliquid quos et officiis repellat iusto, quod
                  laboriosam eveniet id sequi qui illo provident.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {width < 748 && <ReviewSection />}
        </div>
      </div>
      {width >= 748 && (
        <>
          <div className="mb-5">
            <h1 className="font-bold text-sm">Deskripsi</h1>
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
    </Layout>
  );
};

export default ProductDetail;
