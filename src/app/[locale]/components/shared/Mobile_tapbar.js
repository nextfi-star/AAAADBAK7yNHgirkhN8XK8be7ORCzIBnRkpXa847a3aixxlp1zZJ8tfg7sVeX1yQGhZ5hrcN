"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useThemeStore } from "../../../../store";

const data = [
  {
    title: "Home",
    src: "/mobile_tapbar/home.svg",
    src_dark: "/mobile_tapbar/home.svg",
  },
  {
    title: "Activity",
    src: "/mobile_tapbar/activity.svg",
    src_dark: "/mobile_tapbar/activity_dark.svg",
  },
  {
    title: "Investing",
    src: "/mobile_tapbar/Investing.svg",
    src_dark: "/mobile_tapbar/Investing.svg",
    bigIcon: "big__icon",
    bigContainer: "big__container",
  },
  {
    title: "Token",
    src: "/mobile_tapbar/token.svg",
    src_dark: "/mobile_tapbar/token_dark.svg",
  },
  {
    title: "Assets",
    src: "/mobile_tapbar/wallet.svg",
    src_dark: "/mobile_tapbar/wallet_dark.svg",
  },
];
export const Mobile_tapbar = () => {
  const { theme } = useThemeStore();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[430px] max-h-[57px] flex justify-between  px-4 fixed bottom-0 left-0 right-0 mobile__tapbar">
      {data.map(item => (
        <div
          className={` flex flex-col justify-end  items-center transition duration-300 ${
            activeIndex === item.title ? "bg-blue" : ""
          } ${item.bigContainer}`}
          key={item.title}
          onClick={() => {
            setActiveIndex(item.title);
          }}
        >
          <Image
            className={`object-cover w-auto h-auto ${item.bigIcon} `}
            src={theme === "dark" ? item.src_dark : item.src}
            width={40}
            height={40}
            alt={item.title}
            priority
            quality={100}
          />
          <span className="text-[12px] mobile__tapbar_text">{item.title}</span>
        </div>
      ))}
    </div>
  );
};
