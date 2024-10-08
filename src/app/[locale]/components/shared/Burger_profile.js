"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../../../../store";
import Image from "next/image";
import ArrowBracket from "../ui/ArrowBracket";
import { ProfileBurger_info, ProfileBurger_shortcuts, ProfileBurger_assets } from "./index";


export const Burger_profile = ({ handleClick, show }) => {
  const listClass = clsx("m_header__profile", { active: !show });
  const classChange = clsx("m_header__profile_menu", { active: !show });

  const { theme } = useThemeStore();

  const t = useTranslations("nav");

  return (
    <div className="profile__wrapper">
      <div className={`${listClass} profile__burger`}>
        <Image
          src={"/header_icons/profile_burger/wave_dark.svg"}
          width={570}
          height={206}
          quality={100}
          priority
          alt={"profile"}
          className="profile__burger-bg"
        />

        <div className="px-[32px] pb-[39px] flex flex-col justify-between h-full">
          <div className={`${classChange}`} onClick={handleClick}>
            <ArrowBracket color={theme === "dark" ? "white" : "black"} width={25} height={25} className={"rotate-90"} />
          </div>

          <div className="profile__burger-container">
            <ProfileBurger_info username="username****gmail.com" />

            <span className="profile__burger-devider"></span>

           <ProfileBurger_shortcuts />

            <span className="profile__burger-devider"></span>

           <ProfileBurger_assets />

            <span className="profile__burger-devider"></span>
          </div>

          <footer className="profile__burger-footer">
            <div className="w-full flex justify-between items-center">
              <a href="#" className="flex items-center gap-[8px]">
                <Image src={"/header_icons/profile_burger/info_icon.svg"} width={20} height={20} alt="question" />
                About NextFi
              </a>
              <a href="">v6.88.0 {">"}</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
