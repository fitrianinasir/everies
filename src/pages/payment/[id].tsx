import { useGetOrderStatus } from "@/hooks/services/useOrderProduct";
import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import Countdown from "react-countdown";

const PaymentPage = () => {
  const router = useRouter();

  const { data } = useGetOrderStatus(Number(router.query.id));

  return (
    <div className="flex-center">
      <div className="h-screen w-full max-w-sm">
        <div className="h-1/2 flex-center w-full">
          <img src="/animations/payment.gif" width={300} height={300} />
        </div>
        <div className="border-t-2 rounded-4xl border-dashed border-everies-primary-30 h-1/2 pt-12 pb-0 p-8 flex-between flex-col">
          <div className="flex-center flex-col w-full gap-5 ">
            <Image src="/icon/bca.svg" width={150} height={150} alt="bca" />
            <div className="flex-between w-full text-xs">
              <span>{data?.data.payment_type} Virtual Account</span>
              <div className="space-x-2">
                <span className="font-bold">1234567890</span>
                <span className="border text-2xs border-everies-primary-20 text-everies-primary-20 border-dashed rounded-sm px-2 py-1">
                  copy
                </span>
              </div>
            </div>
            <div className="border space-y-2 text-everies-primary-20 border-dashed rounded-md font-semibold w-full p-3 border-everies-primary-30 bg-everies-secondary-10">
              <p className="flex-between text-xs">
                <span>ORDER ID</span>
                <span>{data?.data.id}</span>
              </p>
              <p className="flex-between text-xs">
                <span>TOTAL</span>
                <span>{formatToRupiah(data?.data.total_payment || 0)}</span>
              </p>
              <p className="flex-between text-xs">
                <span>STATUS</span>
                <span>{data?.data.status}</span>
              </p>
            </div>
          </div>

          <div className="text-center w-full text-xs">
            <span className="text-everies-primary-30">
              {" "}
              Your payment will be expired in{" "}
              <Countdown
                date={Date.now() + 60000 * 60}
                renderer={({ minutes, seconds }) => (
                  <span>
                    00:{minutes}:{seconds}
                  </span>
                )}
              />
            </span>
            <div className="rounded-t-2xl bg-everies-primary-20 text-white p-5">
              CHECK ORDER STATUS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
