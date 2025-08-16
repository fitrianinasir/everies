import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Products from "./(components)/Products";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Products />
    </Layout>
  );
}
