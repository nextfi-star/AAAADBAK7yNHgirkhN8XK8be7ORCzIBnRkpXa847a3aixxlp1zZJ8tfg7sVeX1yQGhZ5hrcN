"use client";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "../../i18n/routing";
import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";
import { useTranslations } from "next-intl";
import { LangSwitch } from "../ui/LangSwitch";

export const Burger = ({ csrf }: { csrf: string | null }) => {
  const [show, setShow] = useState<boolean>(true);
  const classChange = clsx("menu", { active: !show });
  const listClass = clsx("m_header", { active: !show });
  const [auth, setAuth] = useState(false);

  const handleClick = (e: any) => {
    setShow(!show);
  };
  const t = useTranslations("shared");
  return (
    <>
      <div className={listClass}>
        <div className="wrapper">
          <div className="img__wrapper">
            <a className="header__icons-item" href="#">
              <Theme_switch />
            </a>
            <button className="header__icons-item">
              <LangSwitch />
            </button>
          </div>
          <span />
          <div className="m__nav">
            {!auth && (
              <div className="m__buttons">
                <Link className="m__buttons-signup" href="/signup">
                  {t("signup")}
                </Link>
                <Link className="m__buttons-login m__outline " href="/login">
                  {t("login")}
                </Link>
              </div>
            )}

            <ul className="m__nav-list">
              {/* <Link className="m__nav-item" href="/">
                  Home
                </Link>
                <Link className="m__nav-item" href="/token">
                  Token
                </Link>
                <Link className="m__nav-item" href="/activity">
                  Status
                </Link>
                <Link className="m__nav-item" href="">
                  How
                </Link> */}
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__intro"
                onClick={handleClick}
              >
                {t("home")}
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__era"
                onClick={handleClick}
              >
                {t("ai_technologies")}
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#how"
                onClick={handleClick}
              >
                {t("investing")}
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__getstarted"
                onClick={handleClick}
              >
                {t("how_to_start")}
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__mobile"
                onClick={handleClick}
              >
                {t("app")}
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__faq"
                onClick={handleClick}
              >
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
