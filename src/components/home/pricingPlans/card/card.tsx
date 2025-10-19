import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PricingCardValues = {
  key: number;
  icon: string;
  header: string;
  title: string;
  options: { [key: string]: string }[];
  btnText: string;
};

export function PricingCard({
  key,
  icon,
  header,
  title,
  options,
  btnText,
}: PricingCardValues) {
  return (
    <>
      <div
        className="w-full border my-2 rounded-2xl hover:shadow-2xl ease-in-out transition-all duration-300 grid grid-cols-1 lg:grid-cols-5"
        key={key}
      >
        <div className="flex justify-center items-center bg-white rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none py-2 col-span-1">
          <Image src={icon} alt="" width={100} height={100} />
        </div>
        <div className=" p-4 bg-amber-50 flex justify-between items-center col-span-3">
          <div className="w-1/2 p-2">
            <h2 className="text-emerald-800">{header}</h2>
            <h3 className="text-md md:text-xl lg:text-2xl font-bold text-justify md:text-start">
              {title}
            </h3>
          </div>
          <div className="w-1/2 p-2">
            <ul>
              {options.map((optionItem, index) => {
                const description = Object.values(optionItem)[0];
                return (
                  <li key={index} className="flex items-center">
                    <Circle size={12} />{" "}
                    <p className="mr-2 text-sm my-2">{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full cursor-pointer flex justify-center items-center bg-white rounded-b-2xl lg:rounded-l-2xl lg:rounded-r-none p-3 col-span-1">
          <Link href="" className="font-bold">
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
}
