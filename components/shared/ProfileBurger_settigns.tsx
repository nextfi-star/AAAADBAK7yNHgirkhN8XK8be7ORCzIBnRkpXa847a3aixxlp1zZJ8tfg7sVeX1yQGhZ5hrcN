"use client";
import ArrowBracket from "@/components/ui/ArrowBracket";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Avatar } from "./Avatar";

interface Props {
  username: string;
  setShowSection: (value: boolean) => void;
  showSection: boolean;
}
export const ProfileBurger_settigns = ({ username, showSection }: Props) => {
  const { theme } = useThemeStore();
  const user = useUserStore((state) => state.user);
  const t = useTranslations("burger");
  return (
    <section
      className={showSection ? `profile__burger-info` : "flex justify-center"}
    >
      <div className="flex flex-col items-center gap-[10px] w-full relative mb-[20px]">
        {!showSection && (
          <span className="-mt-[60px] sm:-mt-[39px] mb-[40px] text-[24px] font-bold">
            User Center
          </span>
        )}
        <div
          className={
            !showSection
              ? `relative md:min-h-[152px] min-h-[80px] md:min-w-[152px] min-w-[80px] z-10 cursor-pointer`
              : "relative min-h-[64px] min-w-[64px] z-10 cursor-pointer"
          }
        >
          <Avatar
            width={!showSection ? 100 : 63}
            height={!showSection ? 100 : 63}
            className="rounded-full object-contain "
          />
          {/* <Image
						alt={'avatar'}
						className='absolute bottom-[0] left-[50%] -translate-x-[50%] object-contain rounded-full min-w-[60px]'
						height={!showSection ? 100 : 63}
						src={'/main/avatar_noface.png'}
						width={!showSection ? 100 : 63}
					/> */}
          <div className="absolute -bottom-[5px] right-[-5px] sm:right-[13px] max-w-[40px]">
            <ChangeAvatar />
          </div>
        </div>

        <div className="flex flex-col">
          {user?.email ? (
            <h5 className="text-[18px]">{user?.email}</h5>
          ) : (
            <h5 className="text-[18px]">{user?.phone}</h5>
          )}
          {showSection && (
            <span className="text-[14px]">{t("profileSettings")}</span>
          )}
        </div>
      </div>
      {showSection && (
        <ArrowBracket
          className={"-rotate-90"}
          color={theme === "dark" ? "white" : "black"}
          height={25}
          width={25}
        />
      )}
    </section>
  );
};
