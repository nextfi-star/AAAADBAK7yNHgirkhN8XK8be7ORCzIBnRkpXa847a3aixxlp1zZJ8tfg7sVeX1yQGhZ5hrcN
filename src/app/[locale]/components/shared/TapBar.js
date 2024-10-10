"use client";
import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useThemeStore } from "../../../../store";

const data = [
  {
    animation_dark: "/tapbar/white/home.json",
    animation_white: "/tapbar/home.json",
    title: "Home",
    speed: "1.5",
  },
  {
    animation_dark: "/tapbar/white/activity.json",
    animation_white: "/tapbar/activity.json",
    title: "Activity",
    speed: "2.5",
  },
  {
    animation_dark: "/tapbar/Blue_logo.json",
    animation_white: "/tapbar/Blue_logo.json",
    title: "Investments",
    class: "round",
    speed: "1.5",
  },
  {
    animation_dark: "/tapbar/white/Token.json",
    animation_white: "/tapbar/Token.json",
    title: "Token",
    speed: "1.5",
  },
  {
    animation_dark: "/tapbar/white/assets.json",
    animation_white: "/tapbar/assets.json",
    title: "Assets",
    speed: "1.5",
  },
];

export const TapBar = () => {
  const { theme, initializeTheme } = useThemeStore();
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  const dotLottieRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const play = index => {
    const currentLottie = dotLottieRefs.current[index];
    if (currentLottie) {
      currentLottie.play();
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  const dotLottieRefCallback = (ref, index) => {
    dotLottieRefs.current[index] = ref;
  };

  return (
    <div
      className={`Tapbar w-full flex justify-evenly items-center sm:hidden ${
        theme === "dark" ? "bg-[#3a3939e8]" : "bg-[#efefefef]"
      }`}
    >
      {data &&
        data.map((item, index) => (
          <div key={item.title} className={`Tapbar__item`} onClick={() => play(index)}>
            <DotLottieReact
              src={theme === "dark" ? item.animation_dark : item.animation_white}
              className={`lottie ${activeIndex === index ? "active" : ""} ${item.class && "round"} `}
              autoplay
              speed={item.speed}
              dotLottieRefCallback={ref => dotLottieRefCallback(ref, index)}
              mode="forward"
              backgroundColor="transparent"
              autoresizecanvas={true}
              style={{
                filter: "invert(38%) sepia(78%) saturate(542%) hue-rotate(189deg) brightness(94%) contrast(89%)",
              }}
            />
            <p className="Tapbar__item-text">{item.title}</p>
          </div>
        ))}
    </div>
  );
};
