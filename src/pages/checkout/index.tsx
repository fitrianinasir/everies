import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummyBag, DummyProduct } from "@/lib/dummy";
import { TProductDetail } from "@/lib/model";
import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDiscount } from "react-icons/md";

const CheckoutPage = () => {
  const data = dummyBag[0].product;
  return (
    <Layout backUrl="/" className="space-y-5 max-w-xl mt-16 w-full">
      <div className="max-w-xl w-full space-y-8">
        <div className="space-y-3">
          <div className="flex-between items-center text-xs text-everies-primary-10">
            <div className="flex flex-row gap-2 items-center justify-end">
              <FaMapMarkerAlt size={16} />
              <span>Address Delivery</span>
            </div>
            <div>Change</div>
          </div>
          <Card className="text-2xs shadow-2xl">
            <p className="bg-everies-primary-10 rounded-full text-everies-light-10 text-2xs px-3 py-1 w-fit">
              Fitriani Nasir (0821-2222-3333)
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </div>
        <div className="mt-10">
          <h1 className="font-bold">Order Summary</h1>
          <div className="space-y-3 mt-3">
            {Array.from({ length: 4 }, (_, index) => (
              <CheckoutItem key={index} product={data} />
            ))}
          </div>
        </div>
        <div className="rounded-xl w-full border flex text-xs font-semibold items-center justify-center gap-2 bg-everies-light-10 border-everies-pink-20 p-6 shadow-2xl">
          <MdDiscount size={16} className="text-everies-pink-10" />
          <span>Reedem your voucher or use loyalty points here</span>
        </div>
        <div className="text-2xs sm:text-xs space-y-3">
          <div className="p-5 border-y flex-between border-y-everies-primary-20">
            <div className="hidden sm:flex sm:items-center gap-3">
              <span className="text-everies-primary-10">PAYMENT METHOD</span>
              <FiEdit size={16} className="text-everies-primary-10 mr-2" />
            </div>
            <div className="flex-between w-full sm:w-fit gap-3 font-semibold ">
              <span>BCA Virtual Account</span>
              <div className="flex-center gap-3">
                <img src="/icon/bca.svg" />
                <FiEdit
                  size={16}
                  className="text-everies-primary-10 mr-2 sm:hidden"
                />
              </div>
            </div>
          </div>
          <div className="text-xs font-semibold">
            <p className="flex-between">
              <span>Subtotal</span>
              <span>Rp. 1.040.000</span>
            </p>
            <p className="flex-between">
              <span>Discount</span>
              <span>-Rp. 80.000</span>
            </p>
            <p className="flex-between">
              <span>Shipping Fee</span>
              <span>Rp. 0</span>
            </p>
            <div className="flex-between p-5 rounded-full text-sm text-white my-6 bg-everies-pink-20">
              <span>TOTAL</span>
              <span>Rp. 960.000</span>
            </div>
            <Button className="float-right">Place Order</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;

const CheckoutItem = ({ product }: { product: TProductDetail }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Image
          src={product.img[0]}
          height={100}
          width={100}
          alt={product.name}
        />
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <p className="font-semibold text-everies-primary-10">
              {product.name}
            </p>
            <p className="text-2xs text-everies-primary-10">White, M</p>
          </div>
          <p className="text-2xs font-semibold">
            {formatToRupiah(product.price * 2)}
          </p>
        </div>
      </div>
      <span className="text-xs text-everies-primary-10">x1</span>
    </div>
  );
};
