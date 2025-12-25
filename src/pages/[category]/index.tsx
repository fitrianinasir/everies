import Layout from "@/components/layout";
import { useGetProductsByCategory } from "@/hooks/services/useGetProducts";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import ProductCard from "../product/ProductCard";

export const getServerSideProps = async (context: {
  params: { category: string };
}) => {
  const { category } = context.params;
  return {
    props: {
      category: category,
    },
  };
};
const ProductCategoryPage = ({ category }: { category: string }) => {
  const { data, isLoading, isError } = useGetProductsByCategory(category);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Layout className="mt-32 space-y-24">
      <div className="relative bg-clothes w-full h-64 bg-cover ">
        <div className="absolute inset-0 text-[60px] text-white font-bold font-michroma bg-black/50 flex items-center justify-center uppercase">
          {category}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {data?.data.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductCategoryPage;
