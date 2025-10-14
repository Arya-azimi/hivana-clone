"use client";

import { footerLinks, footerSocial, Pictures } from "@/lib";
import { Phone } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const logoInf = Pictures.logo;
  return (
    <div className="overflow-x-hidden">
      <div className="w-full shadow-2xl flex justify-center items-center py-4 bg-emerald-950 ">
        <div className="max-w-7xl flex flex-col justify-center items-center p-4 lg:w-full lg:flex-row lg:items-center lg:justify-between ">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:border-l lg:pl-10 lg:border-emerald-500 ">
            <Image
              src={
                "https://hivanagroup.ir/wp-content/uploads/2024/06/earphones_14664830-1.svg"
              }
              width={90}
              height={90}
              alt=""
              className="ml-2"
            />
            <div className="text-center lg:text-start">
              <h2 className="text-2xl text-white py-3 font-semibold">
                ما بهت کمک میکنیم
              </h2>
              <p className="text-center text-l text-white ">
                همکاران ما در تیم پشتیبانی هیدیفای آماده‌ی پاسخ‌گویی به سوالات
                شما هستند.
              </p>
            </div>
          </div>
          <div className="w-2/4 p-3 rounded-b-2xl mt-3 rounded-tl-2xl bg-emerald-800 flex justify-between items-center lg:w-50">
            <div className="">
              <p className="text-white text-xs">09104082056</p>
            </div>
            <div className="">
              <Phone className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shadow-2xl flex justify-center items-center py-4 bg-emerald-900">
        <div className="max-w-7xl justify-center grid lg:grid-cols-2 p-4 lg:w-full ">
          <div className="border border-gray-900 rounded-2xl px-4">
            <div className="footer-pic border-b py-4">
              <Image
                src={logoInf.src}
                width={logoInf.width}
                height={logoInf.height}
                alt={logoInf.alt}
              />
            </div>
            <p className="py-4 text-justify text-white">
              شرکت طراحی سایت هیوانا نامی قدیمی در عرصه ی راه اندازی کسب و
              کارهای اینترنتی است که متخصصان جوانش همواره تلاش کرده اند سطح کیفی
              خدمات خود را بر استانداردهای روز جهان منطبق نمایند. ارائه ی آثار
              مدرن و ساختارشکن و کسب رضایت حداکثری مشتریان، سایتیفای را به برندی
              محبوب در زمینه ی طراحی سایت تبدیل کرده است.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 mt-4 lg:mt-0 lg:mr-8 w-full px-4">
            <div className="my-4 lg:my-0 lg:row-span-2 w-full lg:pl-4">
              <h2 className="text-white font-semibold text-xl">
                دسترسی های سریع
              </h2>
              <ul>
                {footerLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.name} className="py-2">
                      <Link
                        href={link.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors 
                  ${
                    isActive
                      ? "text-amber-100 hover:bg-emerald-700 "
                      : "text-white hover:bg-emerald-950"
                  }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="my-4 lg:my-0 lg:row-span-1 w-full lg:pl-4">
              <h2 className="text-white font-semibold text-xl">
                راه های ارتباطی
              </h2>
              <ul>
                {footerSocial.map((social) => (
                  <li key={social.text} className="py-2">
                    <Link
                      href=""
                      className="text-white flex justify-between items-center"
                    >
                      <p>{social.text}</p>
                      <p>{social.val}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-4 bg-emerald-900 border-y p-2">
        <div className="max-w-7xl justify-center items-center">
          <p className="text-white">
            تمامی حقوق این وبسایت متعلق به{" "}
            <span className="font-semibold">هیوانا</span> است
          </p>
        </div>
      </div>
    </div>
  );
}
