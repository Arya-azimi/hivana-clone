import { planPrices } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { PricingCard } from "./card/card";

export function PricingPlan() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 my-4">
        <div className="bg-amber-100 rounded-2xl p-4">
          <div className="flex flex-col items-center p-4">
            <div className="w-full">
              <Image
                src="https://hivanagroup.ir/wp-content/uploads/2024/07/Rectangle-225-1.svg"
                alt=""
                width={20}
                height={20}
              />
              <Link
                href="/plans"
                className="font-bold flex justify-self-center"
              >
                پلن های قیمتی
              </Link>
            </div>
            <div className="w-full my-4 flex flex-row justify-center items-center">
              <div className="w-1/5 hidden md:block">
                <hr className="text-gray-300" />
              </div>
              <div className="w-4/5 md:w-3/5">
                <h2 className="text-center font-extrabold text-xl md:text-3xl">
                  مطابق با بودجه شما، عمل می کنیم
                </h2>
              </div>
              <div className="w-1/5 hidden md:block">
                <hr className="text-gray-300" />
              </div>
            </div>
            {planPrices.map((item) => (
              <PricingCard
                key={item.id}
                icon={item.icon}
                header={item.header}
                title={item.title}
                options={item.planOptions}
                btnText={item.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
