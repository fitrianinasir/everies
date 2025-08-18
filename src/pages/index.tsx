import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Products from "./product/Products";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Products />
    </Layout>
  );
}
