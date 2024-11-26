"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { NextPage } from "next";
import ArrowBracket from "@/components/ui/ArrowBracket";
import { useThemeStore } from "@/store";
import { Button } from '@nextui-org/button'

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

interface Props {
  unicClass: string;
}
export const Profile_industry: NextPage<Props> = ({ unicClass }) => {
  const t = useTranslations("profile");
  const { theme } = useThemeStore();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <section
        className={`profile__industy profile_blocks_border md:!bg-[#fff] dark:!bg-transparent md:dark:!bg-[#1e1e1e66] ${unicClass} 2xl:!max-w-[650px] !mb-[28px] !shadow-none md:!shadow-medium dark:!shadow-none`}
      >
        <div className="w-full flex justify-between gap-[5px] md:gap-[15px] pt-[1.5rem] px-[10px] md:pt-0">
          <h3 className="profile__industry__main_text">
            {t("ChooseIndustry")}
          </h3>

          <div className="flex items-center justify-end gap-[24px]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <ArrowBracket
                className={"rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </button>
          </div>
        </div>
        <Swiper
          breakpoints={{
            1400: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="!px-[.4rem]"
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.title}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="profile__industry__block rounded-[20px] backdrop-blur-[6px] hover:shadow-lg hover:cursor-pointer transition duration-300 ">
                <div className="profile__industry__block__image">
                  <Image
                    priority
                    alt={item.title}
                    height={33}
                    quality={100}
                    src={item.icon}
                    width={33}
                  />
                  <h4 className="profile__industry__image_text">
                    {item.title}
                  </h4>
                </div>
                <p className="profile__industry__additional_text">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-center">
          <Button className="profile__industry__button btn-blu">Next</Button>
        </div>
      </section>
    </>
  );
};
