import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Products from "./product/Products";

export default function Home() {
  return (
    <Layout>
      <div className="bg-everies-secondary-10 w-full flex items-center justify-center"></div>
      <Products />
    </Layout>
  );
}
