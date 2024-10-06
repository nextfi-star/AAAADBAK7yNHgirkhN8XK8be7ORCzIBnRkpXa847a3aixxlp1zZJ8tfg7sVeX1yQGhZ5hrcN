"use client";
import { Logo_header } from "../ui/Logo_header";
import { Navigation } from "./Navigation";
import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";
import { Burger } from "./Burger";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Link } from "../../../../i18n/routing";
import { User } from "../ui/User";
import { Download2 } from "../ui/download2";
import { useThemeStore } from "../../../../store";

export const Header = ({ auth = true }) => {
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
    <header id="header">
      <div className="header__content" data-aos="fade-down" data-aos-duration="1000">
        {!auth && (
          <a href="" className="header__logo">
            <Logo_header />
          </a>
        )}

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
                <select className="Header__buttons-assets .header__content">
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
              </>
            )}

            <Burger auth />
          </div>

          <div className="header__icons">
            <a href="#" className="header__icons-item">
              <Theme_switch />
            </a>
            <button href="" className="header__icons-item">
              <Locale_Switcher />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
