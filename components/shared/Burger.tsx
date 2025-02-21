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
                 Sign up
                </Link>
                <Link className="m__buttons-login m__outline" href="/login">
                  Login
                </Link>
              </div>
            )}

            <ul className="m__nav-list">
              <a className="m__nav-item" href="">
               Home
              </a>
              <a className= "m__nav-item" href="">
                Token
              </a>
              <a className="m__nav-item" href="">
                Activity
              </a>
              <a className="m__nav-item" href="">
                How
              </a>
              <a className="m__nav-item" href="">
                Listing
              </a>
              <a className="m__nav-item" href="">
                App
              </a>
              <a className="m__nav-item" href="">
                FAQ
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
