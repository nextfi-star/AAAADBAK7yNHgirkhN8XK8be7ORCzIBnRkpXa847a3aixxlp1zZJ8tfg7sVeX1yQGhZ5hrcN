"use client";
import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useThemeStore } from "../../../../store";

const data = [
  {
    animation: "/tapbar/home.json",
    title: "Home",
  },
  {
    animation: "/tapbar/activity.json",
    title: "Activity",
  },
  {
    animation: "/tapbar/Blue_logo.json",
    title: "Investments",
    class: "round",
  },
  {
    animation: "/tapbar/Token.json",
    title: "Token",
  },
  {
    animation: "/tapbar/assets.json",
    title: "Assets",
  },
];

export const TapBar = () => {
  const { theme } = useThemeStore();
  const dotLottieRefs = useRef([]);

  const play = index => {
    const currentLottie = dotLottieRefs.current[index];
    if (currentLottie) {
      currentLottie.play();
    }
  };

  const dotLottieRefCallback = (ref, index) => {
    dotLottieRefs.current[index] = ref;
  };

  return (
    <div
      className={`Tapbar w-full flex justify-between items-center sm:hidden ${
        theme === "dark" ? "bg-[#3a3939e8]" : "bg-[#efefefef]"
      }`}
    >
      {data &&
        data.map((item, index) => (
          <div key={item.animation} className={`Tapbar__item `} onClick={() => play(index)}>
            <DotLottieReact
              src={item.animation}
              className={`lottie ${item.class}`}
              autoplay
              speed={2.5}
              dotLottieRefCallback={ref => dotLottieRefCallback(ref, index)}
            />
            <p className="Tapbar__item-text">{item.title}</p>
          </div>
        ))}
    </div>
  );
};
