import { cn } from "@/lib/utils";
import ProductCard from "./product/ProductCard";
import ProductLayout from "@/components/layout.product";
import { useGetProducts } from "@/hooks/services/useGetProducts";
import Image from "next/image";
import ClothesImage from "../../public/images/everies/clothes.jpg";
const Products = () => {
  const { data } = useGetProducts();
  return (
    <ProductLayout className="space-y-8">
      <div className="space-y-2">
        <h1 className={cn("font-bold text-2xl font-michroma")}>New Arrivals</h1>
        <p className="text-sm max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit
          incidunt iure laborum nesciunt. Non reiciendis, laudantium vel modi
          velit dolorem, nihil voluptatem quaerat adipisci numquam sunt
          quibusdam eos hic.
        </p>
      </div>
      <div
        className={cn(
          (data?.data || []).length > 1
            ? " [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]"
            : "grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
          "w-full grid md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
        )}
      >
        {data?.data.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="">
          <h1 className={cn("font-bold text-2xl font-michroma")}>CLOTHES</h1>
          <Image
            src={ClothesImage}
            width={1000}
            height={1000}
            fetchPriority="high"
            className="size-60"
            alt="Clothes"
          />
        </div>
        <div className="col-span-2">LIST PRODUK</div>
      </div>
    </ProductLayout>
  );
};

export default Products;
