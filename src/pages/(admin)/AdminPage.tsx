import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Products from "./Products";
import Delivery from "./Delivery";

const AdminPage = () => {
  return (
    <main className="bg-everies-light-30 w-screen h-screen flex items-start justify-center">
      <div className="w-full max-w-[1440px] p-12">
        <Tabs defaultValue="products" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <Products />
          </TabsContent>
          <TabsContent value="delivery">
            <Delivery />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default AdminPage;
