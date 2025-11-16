import Layout from "@/components/layout";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import DrawerProduct from "@/components/pages/DrawerProduct";
import { Button } from "@/components/ui/button";
import {
  formatToRupiah,
  variationByColorHandler,
  variationBySizeHandler,
} from "@/lib/utils";
import { MdDiscount } from "react-icons/md";
import { useWindowSize } from "@/hooks/useWindowSize";
import PopupProduct from "@/components/pages/PopupProduct";
import { CounterSmall } from "@/components/pages/Counter";
import { useGetUserCart } from "@/hooks/services/useUserServices";
import { UserCartResponse } from "@/services/checkout";
const BagPage = () => {
  const { width } = useWindowSize();
  const [quantity, setQuantity] = useState(0);

  const { data: cartData } = useGetUserCart(1);

  const [data, setData] = useState<UserCartResponse[]>([]);

  useEffect(() => {
    setData(cartData?.data || []);
  }, [cartData]);

  const [selected, setSelected] = useState<number[]>([]);

  return (
    <Layout backUrl="/" className="space-y-5 max-w-xl mt-16 w-full">
      <div className="w-full grid grid-cols-2">
        <Checkbox
          label="Select All"
          checked={selected.length === 4}
          onCheckedChange={(val) => {
            if (val) {
              setSelected([0, 1, 2, 3]);
            } else {
              setSelected([]);
            }
          }}
        />
        <span
          className="text-xs text-everies-primary-10 text-center cursor-pointer"
          onClick={() => setSelected([])}
        >
          Delete
        </span>
      </div>
      <div className="space-y-4">
        {data.map((i, index) => (
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-start gap-2 justify-start">
              <Checkbox
                checked={selected.includes(index)}
                onCheckedChange={(val) => {
                  if (val) {
                    setSelected((prev) => [...prev, index]);
                  } else {
                    setSelected((prev) => prev.filter((i) => i !== index));
                  }
                }}
              />
              <Image
                src={i.product.preview_img}
                width={100}
                height={100}
                alt={i.product.name}
              />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-semibold text-everies-primary-10">
                    {i.product.name}
                  </h1>
                  {width && width < 576 ? (
                    <DrawerProduct
                      product={i.product}
                      triggerButton={
                        <Button size="sm" variant="secondary" asSelector>
                          Size L | Variant White
                        </Button>
                      }
                      quantity={quantity}
                      setQuantity={setQuantity}
                      variationByColor={variationByColorHandler(
                        i.product.detail.variation_by_color
                      )}
                      variationBySize={variationBySizeHandler(
                        i.product.detail.variation_by_size
                      )}
                      footerButton={<Button>UPDATE</Button>}
                    />
                  ) : (
                    <div>
                      <PopupProduct
                        variationByColor={variationByColorHandler(
                          i.product.detail.variation_by_color
                        )}
                        variationBySize={variationBySizeHandler(
                          i.product.detail.variation_by_size
                        )}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-row gap-1 items-center">
                  {width && width > 576 && (
                    <CounterSmall
                      quantity={quantity}
                      setQuantity={setQuantity}
                      maxStock={10}
                    />
                  )}
                  <div className="">
                    <p className="text-2xs text-gray-500">x{i.quantity}</p>
                    <p className="text-2xs font-semibold">
                      {formatToRupiah(i.total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <FaTrash />
          </div>
        ))}

        <div className="bg-white fixed bottom-0 space-y-2">
          <div className="flex flex-row gap-1 items-center justify-center -mx-4 sm:-mx-8 w-screen max-w-xl bg-everies-primary-30 text-xs p-4 text-everies-secondary-10">
            <MdDiscount size={16} />
            <span>Reedem your lotalty poin here</span>
          </div>
          <div className="grid grid-cols-5 h-full p-2 text-xs">
            <div className="col-span-3 flex h-full flex-col">
              <p>TOTAL</p>
              <p>Rp. 890.000</p>
            </div>
            <div className="col-span-2 flex-col flex items-end">
              <Button className="tracking-widest">CHECKOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BagPage;
