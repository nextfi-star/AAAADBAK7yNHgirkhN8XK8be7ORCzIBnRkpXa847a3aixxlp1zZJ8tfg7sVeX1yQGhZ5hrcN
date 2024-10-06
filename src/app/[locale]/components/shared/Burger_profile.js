"use client";
import { useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useThemeStore } from "../../../../store";

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
        <div className='py-24 px-10'>
					<h1 className='text-[5rem] text-teal-500'>NEW CONTENT WILL BE HERE</h1>
				</div>
      </div>

      <div className={classChange} onClick={handleClick}>
        <Image
          color={theme === "dark" ? "white" : "black"}
          src={"/header_icons/set.svg"}
          width={30}
          height={30}
          alt={"Burger menu"}
        />
      </div>
    </>
  );
};
