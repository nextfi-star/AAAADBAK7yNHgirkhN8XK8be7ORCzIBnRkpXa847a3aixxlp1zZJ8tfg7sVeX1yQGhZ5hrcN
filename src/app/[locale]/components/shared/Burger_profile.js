"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../../../../store";
import Image from "next/image";
import ArrowBracket from "../ui/ArrowBracket";

export const Burger_profile = ({ handleClick, show }) => {
  const listClass = clsx("m_header__profile", { active: !show });
  const classChange = clsx("m_header__profile_menu", { active: !show });

  const { theme } = useThemeStore();

  const t = useTranslations("nav");

  return (
    <div className="profile__wrapper">
      <div className={`${listClass} profile__burger`}>
        <div className={`${classChange}`} onClick={handleClick}>
          <ArrowBracket color={theme === "dark" ? "white" : "black"} width={25} height={25} className={"rotate-90"} />
        </div>

        <Image
          src={"/header_icons/profile_burger/wave_dark.svg"}
          width={570}
          height={206}
          quality={100}
          priority
          alt={"profile"}
          className="profile__burger-bg"
        />

        <div className="profile__burger-container">
          <section className="profile__burger-info">
            <div className="flex items-center gap-[12px]">
              <div className="avatar rounded-full bg-gray-100 min-h-[60px] min-w-[60px]"></div>
              <div className="flex flex-col">
                <h5 className="text-[18px]">username****gmail.com</h5>
                <span className="text-[14px]">Profile Settings</span>
              </div>
            </div>
            <ArrowBracket
              color={theme === "dark" ? "white" : "black"}
              width={25}
              height={25}
              className={"-rotate-90"}
            />
          </section>

          <span className="profile__burger-devider"></span>

          <section className="profile__burger-shortcuts">
            <h5 className="sec__title">Shortcuts</h5>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
            </div>
          </section>

          <span className="profile__burger-devider"></span>

          <section className="profile__burger-assets">
            <h5 className="sec__title">Manage Assets</h5>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/header_icons/profile_burger/support.svg"}
                  width={36}
                  height={36}
                  quality={100}
                  priority
                  alt={"support"}
                  className="w-full"
                />
                <span>Support</span>
              </div>
            </div>
          </section>

          <span className="profile__burger-devider"></span>

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
