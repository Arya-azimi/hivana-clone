"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

export function ResumeSlider() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 my-4">
        <div className="flex flex-col items-center p-4">
          <div className="w-full">
            <Image
              src="https://hivanagroup.ir/wp-content/uploads/2024/07/Rectangle-225-1.svg"
              alt=""
              width={20}
              height={20}
            />
            <Link href="/resume" className="font-bold flex justify-self-center">
              نمونه کارها
            </Link>
          </div>
          <div className="w-full my-4 flex flex-row justify-center items-center">
            <div className="w-1/5 hidden md:block">
              <hr className="text-gray-300" />
            </div>
            <div className="w-4/5 md:w-3/5">
              <h2 className="text-center font-extrabold text-xl md:text-3xl">
                جدیدترین نمونه کارهای طراحی سایت
              </h2>
            </div>
            <div className="w-1/5 hidden md:block">
              <hr className="text-gray-300" />
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper mt-5"
        >
          <SwiperSlide>
            <div className="h-96 w-full border border-amber-500 rounded-2xl bg-amber-50"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 w-full border border-amber-500 rounded-2xl bg-amber-50"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 w-full border border-amber-500 rounded-2xl bg-amber-50"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 w-full border border-amber-500 rounded-2xl bg-amber-50"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 w-full border border-amber-500 rounded-2xl bg-amber-50"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
