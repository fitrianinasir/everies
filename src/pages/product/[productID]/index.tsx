import Layout from "@/components/layout";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaStar } from "react-icons/fa6";
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
import {
  TCheckoutData,
  TProductReviewResponse,
  TUserCart,
  TVariationByColor,
  TVariationBySize,
} from "@/lib/model";
import {
  VariationColor,
  VariationSize,
} from "../../../components/pages/Variation";
import { CounterSmall } from "@/components/pages/Counter";
import { Button } from "@/components/ui/button";
import useAddToCartHandler from "@/hooks/useAddToCart";
import ImagesSection from "./ImagesSection";
import Footer from "./Footer";
import { useCartFlyStore } from "@/store/useCartFlyStore";
import { useRouter } from "next/router";
import { useGetProductById } from "@/hooks/services/useGetProducts";
import { GetServerSidePropsContext } from "next";
import {
  initResponseReviews,
  useGetProductReviews,
} from "@/hooks/services/useGetProductReviews";
import { Skeleton } from "@/components/ui/skeleton";
import { format, parseISO } from "date-fns";
import { useCreateUserCart } from "@/hooks/services/useUserServices";
import { toast } from "sonner";
import Cookies from "js-cookie";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { productID } = context.params!;
  return {
    props: {
      productID: Number(productID),
    },
  };
}

const ProductDetail = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    product,
    setProduct,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = useProductStore((state) => state);

  const [quantity, setQuantity] = useState<number>(1);
  const [maxStock, setMaxStock] = useState<number | undefined>();
  const [variationByColor, setVariationByColor] = useState<TVariationByColor[]>(
    []
  );
  const [variationBySize, setVariationBySize] = useState<TVariationBySize[]>(
    []
  );

  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    setSelectedColor("");
    setSelectedSize("");
    setQuantity(1);
  }, []);

  const { data: result } = useGetProductById(Number(router.query.productID));

  const { data: reviews, isLoading: isLoadingReviews } = useGetProductReviews({
    product_id: Number(router.query.productID),
    page: 1,
  });

  useEffect(() => {
    if (result && result.data) {
      setProduct(result.data);
      setVariationByColor(
        variationByColorHandler(result.data.detail.variation_by_color)
      );
      setVariationBySize(
        variationBySizeHandler(result.data.detail.variation_by_size)
      );
    }
  }, [result]);

  useEffect(() => {
    setMaxStock(
      maxStockHandler({
        colors: variationByColor || [],
        selectedColor: selectedColor,
        selectedSize: selectedSize,
      })
    );
  }, [selectedColor, selectedSize]);

  const mobileSize = 576;

  const { triggerFly, setFlyValue } = useCartFlyStore((s) => s);

  const { mutateAsync: createUserCart } = useCreateUserCart();
  const addToCartHandler = () => {
    const payload: TUserCart = {
      product_id: product.id,
      user_id: 1,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      total: quantity * product.price,
    };

    createUserCart(payload)
      .then((res) => {
        if (res.status === 401) {
          Cookies.set("redirect_after_login", router.asPath);
          router.push("/auth");
          return;
        }
        const fromEl = document.getElementById("add-to-bag-btn");
        const toEl = document.getElementById("cart-icon");

        if (fromEl && toEl) {
          const fromRect = fromEl.getBoundingClientRect();
          const toRect = toEl.getBoundingClientRect();

          setFlyValue(product.preview_img);
          triggerFly({
            from: fromRect,
            to: toRect,
            width: fromRect.width,
            height: fromRect.height,
            img: product.preview_img,
          });
        }
      })
      .catch(() => {
        console.log("caleld?");
        toast.error("Failed to add to cart");
      });
  };

  const buyNowHandler = () => {
    const payload: TCheckoutData[] = [
      {
        product_id: product.id,
        product_name: product.name,
        preview_img: product.preview_img,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        total: quantity * product.price,
      },
    ];

    localStorage.setItem("checkout_payload", JSON.stringify(payload));
    if (Cookies.get("token") === undefined) {
      Cookies.set("redirect_after_login", router.asPath);
      router.push("/auth");
      return;
    }
    router.push("/checkout");
  };

  const limitPagination = width < 576 ? 3 : 7;
  const totalPage = reviews?.data.total_page || 0;
  const firstPaginationSection = Array.from(
    { length: totalPage },
    (_, i) => i + 1
  ).slice(0, limitPagination);
  const lastPaginationSection =
    totalPage > limitPagination ? [totalPage! - 1, totalPage] : [];

  const [middlePaginationSectionState, setMiddlePaginationSectionState] =
    useState<number[]>([]);

  const renderedFirstPagination =
    middlePaginationSectionState.length > 0
      ? firstPaginationSection.slice(0, width < 576 ? 0 : -4)
      : firstPaginationSection;

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
                    {product.name}
                  </h1>
                  <div className="flex flex-row gap-2 items-center">
                    <GeneratedStars
                      stars={product.rate}
                      size={width >= 576 ? "default" : "small"}
                    />
                    <span className="text-xs font-semibold text-gray-500">
                      {product.sold} Sold
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
                {formatToRupiah(product.price)}
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
                    quantity={quantity}
                    setQuantity={setQuantity}
                    maxStock={maxStock}
                  />
                  <div className="text-everies-pink-20 font-extrabold flex items-end">
                    {formatToRupiah(quantity * (product?.price || 0))}
                  </div>
                </div>
                <div className="flex flex-row gap-5 max-w-sm">
                  <Button
                    variant="secondary"
                    disabled={!selectedColor || !selectedSize}
                    onClick={addToCartHandler}
                    className={cn(
                      "flex cursor-pointer items-center text-xs font-semibold hover:scale-110"
                    )}
                  >
                    ADD TO BAG{" "}
                    <BsBag className="size-4 text-everies-primary-20" />
                  </Button>
                  <Button
                    disabled={!selectedColor || !selectedSize}
                    onClick={buyNowHandler}
                    className="cursor-pointer text-xs font-semibold hover:scale-110"
                  >
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

          {width < 576 && (
            <ReviewSection
              reviews={reviews?.data || initResponseReviews}
              isLoadingReviews={isLoadingReviews}
            />
          )}
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
          <ReviewSection
            reviews={reviews?.data || initResponseReviews}
            isLoadingReviews={isLoadingReviews}
          />
        </>
      )}
      {reviews?.data.total_reviews! > 0 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem
              disabled={currPage === 1}
              onClick={() => {
                const prevPage = currPage - 1;
                if (prevPage < middlePaginationSectionState[0]) {
                  if (
                    prevPage ===
                    firstPaginationSection[firstPaginationSection.length - 1]
                  ) {
                    setMiddlePaginationSectionState([]);
                  } else {
                    const midd: number[] = [
                      prevPage,
                      ...middlePaginationSectionState,
                    ].slice(0, -1);
                    console.log(midd, prevPage);
                    setMiddlePaginationSectionState(midd);
                  }
                }
                setCurrPage(currPage - 1);
              }}
            >
              <PaginationPrevious />
            </PaginationItem>

            {/* if middlePagination exist, then cut firstPagination to 1,2,3 */}
            {renderedFirstPagination.map((i) => (
              <PaginationItem key={i} onClick={() => setCurrPage(i - 1)}>
                <PaginationLink isActive={currPage === i}>{i}</PaginationLink>
              </PaginationItem>
            ))}

            {(renderedFirstPagination.length === 3 ||
              middlePaginationSectionState.length === 0) && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {middlePaginationSectionState.map((i) => (
              <PaginationItem key={i} onClick={() => setCurrPage(i)}>
                <PaginationLink isActive={currPage === i}>{i}</PaginationLink>
              </PaginationItem>
            ))}
            {middlePaginationSectionState.length > 0 &&
              middlePaginationSectionState[
                middlePaginationSectionState.length - 1
              ] <
                lastPaginationSection[0] - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            {lastPaginationSection.map((i) => (
              <PaginationItem key={i} onClick={() => setCurrPage(i)}>
                <PaginationLink isActive={currPage === i}>{i}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem
              disabled={currPage === reviews?.data.total_page}
              onClick={() => {
                const nextPage = currPage + 1;
                if (
                  nextPage >
                    firstPaginationSection[firstPaginationSection.length - 1] &&
                  (middlePaginationSectionState[2] + 1 <
                    lastPaginationSection[0] ||
                    middlePaginationSectionState.length === 0)
                ) {
                  const midd: number[] = [
                    ...middlePaginationSectionState,
                    middlePaginationSectionState.length === 0
                      ? nextPage
                      : middlePaginationSectionState[
                          middlePaginationSectionState.length - 1
                        ] + 1,
                  ];

                  setMiddlePaginationSectionState(
                    midd.length < 3
                      ? Array.from({ length: 3 }, (_, i) => midd[0] + i)
                      : midd.slice(-3)
                  );
                }
                setCurrPage(nextPage);
              }}
            >
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {width < mobileSize && (
        <Footer
          quantity={quantity}
          setQuantity={setQuantity}
          buyNowHandler={buyNowHandler}
          variationByColor={variationByColor}
          variationBySize={variationBySize}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;

type ReviewSectionProps = {
  isLoadingReviews: boolean;
  reviews: TProductReviewResponse;
};
const ReviewSection = ({ reviews, isLoadingReviews }: ReviewSectionProps) => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="font-bold text-xs sm:text-sm text-everies-pink-20">
          Penilaian Produk
        </h1>
        {isLoadingReviews ? (
          <Skeleton className="h-3.5 w-96 rounded-full" />
        ) : reviews.total_reviews === 0 ? (
          <div className="p-8 sm:p-12">
            <p className="text-xs flex items-center justify-center font-bold">
              Belum ada review
            </p>
          </div>
        ) : (
          <div className="flex text-2xs items-center mt-1 flex-row gap-1 font-semibold">
            <FaStar className="size-4 sm:size-5  text-yellow-400" />
            <span>
              {reviews.avg_rate}/5.0 | {reviews.total_reviews} orang memberikan
              penilaian
            </span>
          </div>
        )}
      </div>
      {isLoadingReviews
        ? Array.from({ length: 5 }).map((_, i) => (
            <div className="my-3 flex flex-col gap-2">
              <div className="flex flex-row gap-1 items-center">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-3 w-96 rounded-full" />
                  <Skeleton className="h-3 w-96 rounded-full" />
                </div>
              </div>
              <Skeleton className="h-7 w-2/3" />
              <div className="flex flex-row gap-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <Skeleton className="size-16" />
                ))}
              </div>
            </div>
          ))
        : reviews.reviews.map((i) => (
            <div className="text-2xs flex flex-col gap-2 my-3 w-full">
              <div className="flex flex-row gap-1 font-semibold items-center">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/images/profile/profile.png"
                  alt="Rounded avatar"
                />
                <div className="">
                  <div className="flex flex-row gap-1 items-center">
                    <span>{i.username}</span>
                    <GeneratedStars stars={i.rate} size="small" />
                  </div>
                  <span>
                    {format(parseISO(i.createdAt), "dd MMM yyyy hh:mm:ss")} WIB
                    | {i.variant}
                  </span>
                </div>
              </div>
              <span>{i.comment}</span>
              <div className="flex flex-row gap-2">
                {i.images.map((img) => (
                  <img src={img} className="w-16 h-16 object-cover" />
                ))}
              </div>
            </div>
          ))}
    </>
  );
};
