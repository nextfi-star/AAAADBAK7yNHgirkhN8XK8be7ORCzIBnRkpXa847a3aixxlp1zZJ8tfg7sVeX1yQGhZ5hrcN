"use client";
import clsx from "clsx";
import { useThemeStore } from "../../../../store";
import Image from "next/image";
import ArrowBracket from "../ui/ArrowBracket";
import { ProfileBurger_info, ProfileBurger_shortcuts, ProfileBurger_assets } from "./index";
import { useState } from "react";

export const Burger_profile = ({ handleClick, show, menuRef }) => {
  const listClass = clsx("m_header__profile", { active: !show });
  const classChange = clsx("m_header__profile_menu", { active: !show });
  const [showSection, setShowSection] = useState(true);
  const { theme } = useThemeStore();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { title: "Nickname", content: "zya***@rambler.ru" },
    { title: "User ID", content: "6546547" },
    { title: "Account details", content: "Содержимое для третьего заголовка." },
  ];

  return (
    <div className="profile__wrapper" ref={menuRef}>
      <div className={`${listClass} profile__burger`}>
        <div className="px-[32px] pb-[39px] flex flex-col justify-between h-full">
          <div className={`${classChange}`} onClick={handleClick}>
            <ArrowBracket color={theme === "dark" ? "white" : "black"} width={25} height={25} className={"rotate-90"} />
          </div>

          <div className={`profile__burger-container `}>
            <ProfileBurger_info
              username="username****gmail.com"
              setShowSection={setShowSection}
              showSection={showSection}
            />

            {!showSection && (
              <>
                <div className="flex justify-between items-center gap-[5px] mt-[30px]">
                  <span>Profile</span>
                  <span>Security</span>
                  <span>Verification</span>
                </div>
                <span className="w-full min-h-[1px] bg-gray-700 mb-[19px]"></span>
              </>
            )}

            {showSection ? (
              <>
                <span className="profile__burger-devider"></span>

                <ProfileBurger_shortcuts />

                <span className="profile__burger-devider"></span>

                <ProfileBurger_assets />

                <span className="profile__burger-devider"></span>
              </>
            ) : (
              <div className={`accor__wrapper ${!showSection ? "scrollY" : ""}`}>
                <div className="accordion__burger">
                  <h5 className="sec__title flex items-center gap-[5px]">
                    <Image src={"/header_icons/profile_burger/accord_info.svg"} width={44} height={44} alt="icon" />
                    Personal info
                  </h5>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Nickname</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>User ID</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>

                  <span className="w-full min-h-[1px] bg-[#EFEFEF] my-[10px] sm:my-[19px]"></span>
                </div>

                <div className="accordion__burger">
                  <h5 className="sec__title flex items-center gap-[5px]">
                    <Image src={"/header_icons/profile_burger/accepts_burger.svg"} width={44} height={44} alt="icon" />
                    Verification info
                  </h5>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Identity cerification</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Country/Region</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>
                  <span className="w-full min-h-[1px] bg-[#EFEFEF] my-[10px] sm:my-[19px]"></span>
                </div>

                <div className="accordion__burger">
                  <h5 className="sec__title flex items-center gap-[5px]">
                    <Image src={"/header_icons/profile_burger/settings_burger.svg"} width={44} height={44} alt="icon" />
                    Account details
                  </h5>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Email</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Phone</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="accordion__burger__item ">
                    <div className="accordionHeader">
                      <p>Trading fee tier</p>
                      <span className="toggle__btn">
                        {" "}
                        <ArrowBracket
                          color={theme === "dark" ? "white" : "black"}
                          width={25}
                          height={25}
                          className={"-rotate-90"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        {showSection && (
          <Image
            src={"/header_icons/profile_burger/wave_dark.svg"}
            width={475}
            height={206}
            quality={100}
            priority
            alt={"profile"}
            className="profile__burger-bg"
          />
        )}
      </div>
    </div>
  );
};
