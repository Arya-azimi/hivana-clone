import { homePics } from "@/lib/constants/home";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 my-4 ">
        <div className="flex flex-col items-center bg-lime-200 rounded-xl p-8 lg:flex-row lg:justify-between">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${homePics.hero1.src})` }}
          >
            <h2 className="text-xl lg:text-2xl text-emerald-700 mt-20">
              نقطه شروع کسب و کار شما از
            </h2>
            <h1 className="text-2xl lg:text-4xl font-extrabold my-4">
              خدمات طراحی سایت و سئو{" "}
              <span className="text-lime-600">هیوانا</span>
            </h1>
            <p className="text-emerald-700 text-justify lg:w-3/4">
              راه اندازی کسب و کارهای اینترنتی خود را با کمک متخصصان جوان بر
              استانداردهای روز جهان منطبق نمایید.
            </p>
            <button className="flex items-center my-5 bg-emerald-950 p-1 text-white rounded-xl">
              درخواست مشاوره <ArrowLeft size={15} />{" "}
            </button>
          </div>
          <div className="">
            <Image src={homePics.hero2.src} alt="" height={600} width={600} />
          </div>
        </div>
      </div>
    </>
  );
}
