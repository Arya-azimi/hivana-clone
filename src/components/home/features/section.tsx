import { featuresItems } from "@/lib/constants/home";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center bg-lime-200 rounded-xl p-8 lg:flex-row lg:justify-between">
          {featuresItems.map((item) => (
            <div
              className="border bg-white cursor-pointer rounded-xl shadow-2xl text-center p-2 transition-all duration-200 ease-in-out hover:drop-shadow-2xl hover:bg-amber-50"
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
                <h3 className="font-extrabold text-md w-2/3">{item.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
