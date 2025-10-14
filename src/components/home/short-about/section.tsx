import { AboutPersents } from "@/lib/constants/home";
import Image from "next/image";
import Link from "next/link";

export function ShortAbout() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 my-4">
        <div className="bg-blue-200 rounded-2xl p-4">
          <div className="flex flex-col items-center mt-4">
            <div className="w-full ">
              <Link
                href="/resume"
                className="font-bold flex justify-self-center"
              >
                درباره ما
              </Link>
            </div>
            <div className="w-full my-4 flex flex-row justify-center items-center">
              <div className="w-full flex flex-row-reverse justify-center">
                <Image
                  src="https://hivanagroup.ir/wp-content/uploads/2024/07/Ellipse-20.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="relative -top-7"
                />
                <div className="w-full my-4 flex flex-row justify-center items-center">
                  <div className="w-1/5 hidden md:block">
                    <hr className="text-gray-500" />
                  </div>
                  <div className="w-4/5 md:w-3/5">
                    <h2 className="text-center font-extrabold text-xl md:text-3xl">
                      بهترین ها در زمینه طراحی سایت
                    </h2>
                  </div>
                  <div className="w-1/5 hidden md:block">
                    <hr className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            <p className="w-4/5 lg:w-2/3 text-center text-emerald-900">
              هیوانا شرکتی در عرصه ی راه اندازی کسب و کارهای اینترنتی است که
              متخصصان جوانش همواره تلاش کرده اند سطح کیفی خدمات خود را بر
              استانداردهای روز جهان منطبق نمایند.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 p-4 items-center lg:flex-row lg:justify-between">
            {AboutPersents.map((item) => (
              <div
                className="border bg-white cursor-pointer rounded-xl shadow-2xl text-center p-3 transition-all duration-200 ease-in-out hover:drop-shadow-2xl hover:bg-amber-50"
                key={item.text}
              >
                <div className="flex items-center ">
                  <Image
                    src={item.logo.src}
                    alt=""
                    width={80}
                    height={80}
                    className="w-1/4"
                  />
                  <div className="flex flex-col p-1 ">
                    <h3 className="text-justify text-md lg:text-lg w-full font-extrabold">
                      {item.label}
                    </h3>
                    <p className="text-justify">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
