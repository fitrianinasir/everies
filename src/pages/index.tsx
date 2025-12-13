import Layout from "@/components/layout";
import Products from "./Products";
import { GetServerSidePropsContext } from "next";
import AdminPage from "./(admin)/AdminPage";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const role = req.cookies.role || null;
  return {
    props: { role },
  };
}

export default function Home({ role }: { role: string | null }) {
  return role === "admin" ? (
    <AdminPage />
  ) : (
    <Layout>
      <Products />
    </Layout>
  );
}
