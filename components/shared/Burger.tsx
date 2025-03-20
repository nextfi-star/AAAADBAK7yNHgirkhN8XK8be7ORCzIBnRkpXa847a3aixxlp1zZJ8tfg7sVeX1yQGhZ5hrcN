"use client";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "../../i18n/routing";
import Theme_switch from "./Theme_switch";
import Locale_Switcher from "./Locale_Switcher";

export const Burger = ({ csrf }: { csrf: string | null }) => {
  const [show, setShow] = useState<boolean>(true);
  const classChange = clsx("menu", { active: !show });
  const listClass = clsx("m_header", { active: !show });
  const [auth, setAuth] = useState(false);

  const handleClick = (e: any) => {
    setShow(!show);
  };

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

            {csrf && (
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
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#main__intro"
                >
                  Home
                </a>
                <a
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#main__era"
                >
                  AI Technologies
                </a>
                <a
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#how"
                >
                  Investing
                </a>
                <a
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#main__getstarted"
                >
                  How to start
                </a>
                <a
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#main__mobile"
                >
                  App
                </a>
                <a
                  className="m__nav-item hover:text-blue-700 transition-all"
                  href="#main__faq"
                >
                  FAQ
                </a>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={classChange} onClick={handleClick}>
        <span />
      </div>
    </>
  );
};
