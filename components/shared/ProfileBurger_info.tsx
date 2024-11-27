"use client";
import Image from "next/image";
import { NextPage } from "next";

import ArrowBracket from "../ui/ArrowBracket";
import { useThemeStore } from "../../store";

interface Props {
  username: string;
  setShowSection: (val: boolean) => void;
  showSection: boolean;
}
export const ProfileBurger_info: NextPage<Props> = ({
  username,
  setShowSection,
  showSection,
}) => {
  const { theme } = useThemeStore();
  const handleClick = () => {
    setShowSection(!showSection);
  };

  return (
    <section className={`profile__burger-info !pr-[24px]`} onClick={handleClick}>
      <div
        className={`flex items-center gap-[20px]`}
      >
        <div
          className={"relative min-h-[64px] min-w-[64px] z-10 cursor-pointer"}
        >
          <Image
            alt={"avatar"}
            className="absolute bottom-[0] left-[50%] -translate-x-[50%] object-contain rounded-full min-w-[60px]"
            height={!showSection ? 100 : 63}
            src={"/main/avatar_noface.png"}
            width={!showSection ? 100 : 63}
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-[18px]">{username}</h5>
          {showSection && <span className="text-[14px]">Profile Settings</span>}
        </div>
      </div>
      {showSection && (
        <div onClick={handleClick}>
          <ArrowBracket
            className={"-rotate-90"}
            color={theme === "dark" ? "white" : "black"}
            height={25}
            width={25}
          />
        </div>
      )}
    </section>
  );
};
