"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { DataGallery } from "@/data/DataGallery";
import Link from "next/link";
import Btn from "@/components/UI/Btn";

// ✨ //////////////////////////////

export default function HomeGallery() {
  return (
    <main className="relative z-20 bg-neutral-900">
      <div className="margin-x margin-y">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={4}
        >
          {DataGallery.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <div className="absolute z-10 top-0 left-0 flex items-center justify-center my-transition opacity-0 hover:opacity-100 w-full h-full bg-[#ed028c]/40 backdrop-blur-sm">
                  <Btn text="Book now" href="/enquiries" />
                </div>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={250}
                  height={250}
                  className="h-64 w-full object-cover mb-12"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
