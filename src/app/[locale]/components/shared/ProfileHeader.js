"use client";
import { Navigation } from "./Navigation";
import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";
import { Burger_profile } from "./Burger_profile";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Link } from "../../../../i18n/routing";
import { User } from "../ui/User";
import { Download2 } from "../ui/download2";
import { useThemeStore } from "../../../../store";
import { Logo_header } from "../ui/Logo_header";
import { Chat } from "../ui/Chat";

export const ProfileHeader = ({ auth = true }) => {
  const t = useTranslations("nav");
  const { theme } = useThemeStore();
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      const yPosition = window.scrollY;
      if (yPosition > 1) {
        header?.classList.add("box-shadow");
      } else {
        header?.classList.remove("box-shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="py-[1.5rem]">
      <div className="header__content site-holder" data-aos="fade-down" data-aos-duration="1000">
        <a href="" className="header__logo">
          <Logo_header />
        </a>
        <Burger_profile />

        <Navigation />

        <div className="header__actions">
          <div className="header__buttons">
            {!auth ? (
              <>
                <Link href="/login" className="header__buttons-login">
                  {t("LogIn")}
                </Link>
                <Link href="/signup" className="header__buttons-signup">
                  {t("SignUp")}
                </Link>{" "}
              </>
            ) : (
              <>
                <div className="profile__header__icons hidden sm:flex gap-[20px]">
                  <select className="header__buttons-assets .header__content">
                    <option className="text-black" value="">
                      Assets
                    </option>
                    <option className="text-black" value="">
                      NextFi
                    </option>
                  </select>
                  <Link href="/" className="user">
                    <User color={theme === "dark" ? "white" : "black"} className={"user"} />
                  </Link>
                  <Link href="/">
                    <Download2 color={theme === "dark" ? "white" : "black"} />
                  </Link>
                  <a href="#" className="header__icons-item">
                    <Theme_switch />
                  </a>

                  <button href="" className="header__icons-item">
                    <Locale_Switcher />
                  </button>
                </div>
                <div className="flex sm:hidden gap-[18px]">
                  <a href="#" className="header__icons-item">
                    <Theme_switch width={30}/>
                  </a>
                  <button href="" className="header__icons-item">
                    <Locale_Switcher />
                  </button>
                  <button href="" className="header__icons-item">
                    <Chat width={20} height={30} color={theme === "dark" ? "white" : "black"} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
