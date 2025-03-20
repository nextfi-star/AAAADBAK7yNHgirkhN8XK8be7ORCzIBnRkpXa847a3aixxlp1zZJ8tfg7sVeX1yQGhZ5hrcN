"use client";
import { Logo_header } from "@/components/ui/Logo_header";
import { useUserStore } from "@/hooks/useUserData";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Download2 } from "../ui/download2";
import { LangSwitch } from "../ui/LangSwitch";
import { User } from "../ui/User";
import { Burger } from "./Burger";
import { Navigation } from "./Navigation";
import Theme_switch from "./Theme_switch";
import { usePathname } from "next/navigation";

interface Props {
  auth?: boolean;
}
export const Header = ({ auth = true }: Props) => {
  const { theme } = useThemeStore();
  const csrf = useUserStore((state) => state.user?.csrf);
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const shouldHide = ["/"].some((path) => pathname.includes(path));
  useEffect(() => {
    const header = document.getElementById("header");
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

  const width = window.innerWidth;

  const t = useTranslations("shared");
  return (
    <header className="initial_header" id="header">
      <div className="site-holder">
        <div
          className="header__content"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {!auth && (
            <a className="header__logo" href="">
              <Logo_header className="min-w-[123px]" />
            </a>
          )}

          {!shouldHide && <Navigation />}

          {width > 1100 && (
            <div className="gap-10 text-[18px] flex md:gap-2 xl:gap-3 2xl:gap-5">
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__intro"
              >
                Home
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__era"
              >
                AI Technologies
              </a>
              <a className="hover:text-blue-700 transition-all" href="#how">
                Investing
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__getstarted"
              >
                How to start
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__mobile"
              >
                App
              </a>
              <a
                className="hover:text-blue-700 transition-all"
                href="#main__faq"
              >
                FAQ
              </a>
            </div>
          )}

          <div className="header__actions">
            <div className="header__buttons">
              {!auth ? (
                <>
                  <Link className="header__buttons-login" href="/login">
                    {t("login")}
                  </Link>
                  <Link className="header__buttons-signup" href="/signup">
                    {t("signup")}
                  </Link>{" "}
                </>
              ) : (
                <>
                  <Link className="user" href="/">
                    <User
                      className={"user"}
                      color={theme === "dark" ? "white" : "black"}
                    />
                  </Link>
                  <Link href="/">
                    <Download2 color={theme === "dark" ? "white" : "black"} />
                  </Link>
                </>
              )}

              <Burger csrf={csrf} />
            </div>

            <div className="header__icons">
              <a className="header__icons-item" href="#">
                <Theme_switch />
              </a>
              <div className="header__icons-item">
                <LangSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
