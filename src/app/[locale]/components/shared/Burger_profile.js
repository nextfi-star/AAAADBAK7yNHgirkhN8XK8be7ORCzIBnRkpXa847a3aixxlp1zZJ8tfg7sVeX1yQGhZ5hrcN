"use client";
import { useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../../../../store";
import { BurgerIcon } from "../shared/BurgerIcon";

export const Burger_profile = () => {
  const [show, setShow] = useState(true);
  const listClass = clsx("m_header__profile", { active: !show });
  const classChange = clsx("m_header__profile_menu", { active: !show });

  const handleClick = e => {
    setShow(!show);
  };
  const { theme } = useThemeStore();

  const t = useTranslations("nav");

  return (
    <>
      <div className={listClass}>
        <div className="py-24 px-10">
          <h1 className="text-[5rem] text-teal-500">NEW CONTENT WILL BE HERE</h1>
        </div>
      </div>

      <div className={classChange} onClick={handleClick}>
        <BurgerIcon color={theme === "dark" ? "white" : "black"} />
      </div>
    </>
  );
};
