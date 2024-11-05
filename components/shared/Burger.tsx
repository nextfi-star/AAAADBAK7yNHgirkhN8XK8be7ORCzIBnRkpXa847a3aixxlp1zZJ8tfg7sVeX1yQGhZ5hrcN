"use client";
import { useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Link } from "../../i18n/routing";

import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";

export const Burger = () => {
  const [show, setShow] = useState<boolean>(true);
  const classChange = clsx("menu", { active: !show });
  const listClass = clsx("m_header", { active: !show });
  const [auth, setAuth] = useState(false);

  const handleClick = (e: any) => {
    setShow(!show);
  };

  const t = useTranslations("nav");

  return (
    <>
      <div className={listClass}>
        <div className="wrapper">
          <div className="img__wrapper">
            <a className="header__icons-item" href="#">
              <Theme_switch />
            </a>
            <button className="header__icons-item">
              <Locale_Switcher />
            </button>
          </div>
          <span />
          <div className="m__nav">
            {!auth && (
              <div className="m__buttons">
                <Link className="m__buttons-signup" href="/signup">
                  {t("SignUp")}
                </Link>
                <Link className="m__buttons-login m__outline" href="/login">
                  {t("LogIn")}
                </Link>
              </div>
            )}

            <ul className="m__nav-list">
              <a className="m__nav-item" href="">
                {t("home")}
              </a>
              <a className="m__nav-item" href="">
                {t("token")}
              </a>
              <a className="m__nav-item" href="">
                {t("activity")}
              </a>
              <a className="m__nav-item" href="">
                {t("how")}
              </a>
              <a className="m__nav-item" href="">
                {t("listing")}
              </a>
              <a className="m__nav-item" href="">
                {t("app")}
              </a>
              <a className="m__nav-item" href="">
                {t("faq")}
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className={classChange} onClick={handleClick}>
        <span />
      </div>
    </>
  );
};
