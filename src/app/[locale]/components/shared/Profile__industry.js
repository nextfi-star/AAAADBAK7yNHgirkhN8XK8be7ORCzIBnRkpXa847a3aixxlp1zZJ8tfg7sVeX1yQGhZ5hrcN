"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const data = [
  {
    title: "Company Stocks",
    desc: "Tracking successful promotions and ensuring financial security in trading on the market.",
    icon: "/main/profile_swiper/equalizer.svg",
  },
  {
    title: "Corporate Bonds",
    desc: "Ownership of more than X bonds with regular updates and profitable financial transactions related to them..",
    icon: "/main/profile_swiper/bank.svg",
  },
  {
    title: "Oil Sector",
    desc: "Smart and efficient trading of oil products in the eastern market.",
    icon: "/main/profile_swiper/oil.svg",
  },
  {
    title: "Precious Metals",
    desc: "Constantly increasing assets and executing profitable transactions with them.",
    icon: "/main/profile_swiper/metals.svg",
  },
  {
    title: "Innovative Startups",
    desc: "Analysis and search for the most promising projects aimed at acquiring a stake and subsequent growth of dividends..",
    icon: "/main/profile_swiper/startup.svg",
  },
];
export const Profile_industry = () => {
  const t = useTranslations("profile");

  return (
    <section className="profile__industy profile_blocks_border ">
      <h3 className="profile__industry__main_text">{t("ChooseIndustry")}</h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          1279: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.title} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="profile__industry__block rounded-[20px] backdrop-blur-[6px] hover:shadow-lg hover:cursor-pointer transition duration-300 ">
              <div className="profile__industry__block__image">
                <Image src={item.icon} width={33} height={33} quality={100} priority alt={item.title} />
                <h4 className="profile__industry__image_text">{item.title}</h4>
              </div>
              <p className="profile__industry__additional_text">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center">
        <button className="profile__industry__button btn-blu">Next</button>
      </div>
    </section>
  );
};
