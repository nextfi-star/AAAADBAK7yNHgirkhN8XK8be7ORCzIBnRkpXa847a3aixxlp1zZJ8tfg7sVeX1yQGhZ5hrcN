"use client";
import { Link } from "@/i18n/routing";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { NextPage } from "next";
import { useEffect, useMemo, useRef, useState } from "react";
import { useThemeStore } from "../../store/useChatStore";
import { useTranslations } from "next-intl";

export const TapBar: NextPage = () => {
  const { theme, initializeTheme, setVerifyState } = useThemeStore();
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("tapbar");
  const data = useMemo(
    () => [
      {
        animation_dark: "/tapbar/white/home.json",
        animation_white: "/tapbar/home.json",
        title: "Home",
        speed: 1.5,
        href: "/over",
        onclick: () => setVerifyState(false),
      },
      {
        animation_dark: "/tapbar/white/activity.json",
        animation_white: "/tapbar/activity.json",
        title: "Activity",
        speed: 2.5,
        href: "/activity",
        onclick: () => setVerifyState(true),
      },
      {
        animation_dark: "/tapbar/Blue_logo.json",
        animation_white: "/tapbar/Blue_logo.json",
        title: "Investing",
        class: "round",
        class2: "round2",
        speed: 1.5,
        href: "/invest",
        onclick: () => setVerifyState(false),
      },
      {
        animation_dark: "/tapbar/white/Token(1).json",
        animation_white: "/tapbar/Token copy.json",
        title: "Deposit",
        speed: 1.5,
        href: "/deposit",
        onclick: () => setVerifyState(false),
      },
      {
        animation_dark: "/tapbar/white/assets.json",
        animation_white: "/tapbar/assets.json",
        title: "Assets",
        speed: 1.5,
        href: "/assets",
        onclick: () => setVerifyState(true),
      },
    ],
    [setVerifyState]
  );
  const dotLottieRefs = useRef<(DotLottie | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const play = (index: number) => {
    const currentLottie = dotLottieRefs.current[index];
    if (currentLottie) {
      currentLottie.play();
      setActiveIndex(index === activeIndex ? null : index);
    }
  };
  const dotLottieRefCallback = (ref: any, index: number) => {
    dotLottieRefs.current[index] = ref;
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div
          className={`Tapbar w-full flex justify-evenly items-center sm:hidden ${
            theme === "dark" ? "bg-[#3a3939e8]" : "bg-[#efefefef]"
          }`}
        >
          {data &&
            data.map((item, index) => (
              <div
                key={item.title}
                className={`Tapbar__item `}
                onClick={() => play(index)}
              >
                <div className={`Tapbar__item`}>
                  <div
                    className={
                      item.class &&
                      `flex justify-center items-center bg-[#3F7EF3] rounded-full w-16 h-16 shadow-custom-shadow backdrop-blur-custom-blur ${item.class && "-mt-[15px] shadow"} `
                    }
                  >
                    <Link href={item.href} onClick={item.onclick}>
                      <DotLottieReact
                        autoplay
                        backgroundColor="transparent"
                        className={`lottie ${
                          activeIndex === index ? "active" : ""
                        } ${item.class && "!filter-none big"}  `}
                        dotLottieRefCallback={(ref) =>
                          dotLottieRefCallback(ref, index)
                        }
                        mode="forward"
                        speed={item.speed}
                        src={
                          theme === "dark"
                            ? item.animation_dark
                            : item.animation_white
                        }
                        style={{
                          filter:
                            "invert(38%) sepia(78%) saturate(542%) hue-rotate(189deg) brightness(94%) contrast(89%)",
                        }}
                      />
                    </Link>
                  </div>
                </div>

                <p
                  className={`Tapbar__item-text ${item.class ? "mb-[5px]" : "mb-[10px]"}`}
                >
                  {t(item.title.toLowerCase())}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
