"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Accordion from "../ui/Accordion";
import ArrowUP from "../ui/ArrowUP";
import Eye from "../ui/Eye";
import StarsMobile from "../ui/StarsMobile";
import Stonks from "../ui/Stonks";
import ArrowBracket from "../ui/ArrowBracket";
import "./chart.scss";
import { ChartBlock } from "./ChartBlock";
import { Swiper, SwiperSlide } from "swiper/react";

export const Profile_balance = () => {
  const t = useTranslations("profile");
  const swiperRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  const handleSlideChange = index => {
    setIsActive(index === 0);
  };
  const [activeButton, setActiveButton] = useState("1 week");

  const handler = () => {};

  const buttons = [
    { gap: "1 day", onClick: handler() },
    { gap: "1 week", onClick: handler() },
    { gap: "1 month", onClick: handler() },
    { gap: "half-year", onClick: handler() },
    { gap: "year", onClick: handler() },
  ];

  function scrollButtons(direction) {
    const buttonsContainer = document.querySelector(".profile__chart__buttons");
    const scrollAmount = 100; // Количество пикселей для прокрутки

    if (direction === "left") {
      buttonsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      buttonsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  return (
    <section className="">
      <div className="w-[212px] flex sm:hidden  m-auto gap-[4px] justify-between rounded-[50px] h-[40px] bg-gray-200">
        <button
          className={`w-[104px] transition duration-300 ${
            isActive ? "bg-[#205BC9] text-white" : "text-[#205BC9]"
          } text-[18px] rounded-[50px] font-medium`}
          onClick={() => swiperRef.current.slideTo(0)}
        >
          Balance
        </button>
        <button
          className={`w-[104px] transition duration-300 ${
            !isActive ? "bg-[#205BC9] text-white" : "text-[#205BC9]"
          } text-[18px] rounded-[50px] font-medium`}
          onClick={() => swiperRef.current.slideTo(1)}
        >
          Bonus
        </button>
      </div>

      <div className="profile__balance ">
        <div className="profile__balance_sides">
          {/* Mobile */}
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            onSlideChange={swiper => handleSlideChange(swiper.activeIndex)}
          >
            <SwiperSlide>
              <div className="w-full sm:hidden m-auto shadow-lg  border border-[#3A3939] border-solid gap-[10px] rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <StarsMobile width="24px" />
                    <h4 className="text-blue-600 text-[20px] font-semibold">Balance</h4>
                  </div>
                  <div>
                    <select className="bg-transparent text-[16px] font-medium">
                      <option className="text-[12px] max-w-[1px] text-black" value="USDT">
                        USDT
                      </option>
                      <option className="text-[12px] max-w-[1px] text-black" value="NextFi">
                        NextFi
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-[8px]">
                  <p className="text-[24px] font-bold">$000,000</p>
                  <Eye />
                </div>

                <div className="flex items-center gap-2 text-blue-600 text-[14px]">
                  <Stonks />
                  <p>Today $0,00 (0,00 %)</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full sm:hidden m-auto shadow-lg  border border-[#3A3939] border-solid gap-[10px] rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <StarsMobile width="24px" />
                    <h4 className="text-blue-600 text-[20px] font-semibold">Bonus Balance</h4>
                  </div>
                  <div>
                    <select className="bg-transparent text-[16px] font-medium">
                      <option className="text-[12px] max-w-[1px] text-black" value="USDT">
                        USDT
                      </option>
                      <option className="text-[12px] max-w-[1px] text-black" value="NextFi">
                        NextFi
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-[8px]">
                  <p className="text-[24px] font-bold">$000,000</p>
                  <Eye />
                </div>

                <div className="flex items-center gap-2 text-blue-600 text-[14px]">
                  <Stonks />
                  <p>Today $0,00 (0,00 %)</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="profile_balance_side">
            <div className="profile_balance_side_title">
              <h4 className="profile_balance_side_main_text">
                <StarsMobile /> Balance
              </h4>
              <p className="profile_balance_side_cost_text">
                <select>
                  <option value="">USDT</option>
                  <option value="">NextFi</option>
                </select>
              </p>
            </div>
            <p className="profile_balance_side_money">
              $000,000,000 <Eye />
            </p>
            <div className="profile_balance_side_statistic_block">
              <Stonks />
              <p className="profile_balance_side_statistic_block_text">Today $0,00 (0,00 %)</p>
            </div>
          </div>

          <div className="profile_balance_side">
            <div className="profile_balance_side_title">
              <h4 className="profile_balance_side_main_text">
                <StarsMobile /> Bonus Balance
              </h4>
              <p className="profile_balance_side_cost_text">
                <select>
                  <option value="">USDT</option>
                  <option value="">NextFi</option>
                </select>
              </p>
            </div>
            <p className="profile_balance_side_money">
              $000,000,000 <Eye />
            </p>
            <div className="profile_balance_side_statistic_block">
              <Stonks />
              <p className="profile_balance_side_statistic_block_text">Today $0,00 (0,00 %)</p>
            </div>
          </div>
        </div>

        <Accordion
          className="profile__balance__accordion"
          title={
            <div className="profile_balance_buttons">
              <button className="profile_balance_button">Deposit</button>
              <button className="profile_balance_button">Withdraw</button>
              <button className="profile_balance_button">Swap</button>
            </div>
          }
          rightside={"Chart"}
        >
          <div className="profile__chart__container">
            <div className="profile__chart">
              <ChartBlock />
            </div>

            <div className={"profile__chart__header__block"}>
              <div className={"profile__chart__header"}>
                <Link href="#" className={"profile__chart__downloadLink"}>
                  <p>Download the Report</p> <ArrowUP />
                </Link>
              </div>

              <div className={"profile__chart__buttons-wrapper"}>
                <button className="slider-arrow" onClick={() => scrollButtons("left")}>
                  <ArrowBracket className={"rotate-90"} />
                </button>
                <div className={"profile__chart__buttons"}>
                  {buttons.map(btn => (
                    <button
                      key={btn.gap}
                      onClick={btn.onClick}
                      className={`${"profile__chart__button"} ${
                        activeButton === btn.gap ? "profile__chart__button--active" : ""
                      }`}
                    >
                      {btn.gap}
                    </button>
                  ))}
                </div>
                <button className="slider-arrow " onClick={() => scrollButtons("right")}>
                  <ArrowBracket className={"rotate-270"} />
                </button>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      {/* <div className="w-[364px] h-[156px] m-auto shadow-lg  gap-[10px] rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <StarsMobile width="24px" />
                <h4 className="text-blue-600 text-[20px] font-semibold">Bonus Balance</h4>
              </div>
              <div>
                <select className="bg-transparent text-[16px] font-medium">
                  <option value="USDT">USDT</option>
                  <option value="NextFi">NextFi</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-[8px]">
              <p className=" text-[24px] font-bold">$000,000,000</p>
              <Eye />
            </div>

            <div className="flex items-center gap-2 text-blue-600 text-[14px]">
              <Stonks />
              <p>Today $0,00 (0,00 %)</p>
            </div>
          </div> */}
    </section>
  );
};
