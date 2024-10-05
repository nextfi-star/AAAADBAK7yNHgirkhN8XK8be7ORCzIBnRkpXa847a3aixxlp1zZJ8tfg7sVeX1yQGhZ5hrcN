"use client";
import { Logo_header } from "../ui/Logo_header";
import { Navigation } from "./Navigation";
import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";
import { Burger } from "./Burger";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Link } from "../../../../i18n/routing";

export const Header = ({ hasAuth = true }) => {
  const t = useTranslations("nav");

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
        <a href="" className="header__logo">
          <Logo_header />
        </a>

        <Navigation />

        <span>TEST FROM ARTUR</span>

        {hasAuth && (
          <div className="header__actions">
            <div className="header__buttons">
              <Link href="/login" className="header__buttons-login">
                {t("LogIn")}
              </Link>
              <Link href="/signup" className="header__buttons-signup">
                {t("SignUp")}
              </Link>
              <Burger />
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
        )}
      </div>
    </header>
  );
};
