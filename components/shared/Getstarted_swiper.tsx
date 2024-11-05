"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NextPage } from "next";

import { useThemeStore } from "../../store";

const data = [
  {
    title: "Top up your balance",
    alt: "balance",
    dark: "/main/Card_finance.png",
    light: "/main/getstarted-balance.png",
  },
  {
    title: "Withdraw money",
    alt: "income",
    dark: "/main/Card_finance-1.png",
    light: "/main/getstarted-income.png",
  },
];

export const Getstarted_swiper: NextPage = () => {
  const { theme } = useThemeStore();

  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="getstarted-swiper"
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
    >
      <div className="swiper-wrapper">
        {data.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="getstarted__big-content__item">
              <div className="getstarted__image-wrapper">
                <Image
                  alt={slide.alt}
                  className="getstarted__image max-w-[240px]"
                  height={400}
                  quality={100}
                  src={theme === "dark" ? slide.dark : slide.light}
                  width={400}
                />
              </div>
              <a className="btn btn-blue btn-none" href="">
                {slide.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
