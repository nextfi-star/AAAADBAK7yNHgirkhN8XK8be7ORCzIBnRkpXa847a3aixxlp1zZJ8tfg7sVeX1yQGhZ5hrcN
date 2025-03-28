import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ArrowBracket from "../ui/ArrowBracket";
import { Avatar } from "./Avatar";

interface Props {
  setShowSection: (val: boolean) => void;
  showSection: boolean;
}
export const ProfileBurger_info = ({ setShowSection, showSection }: Props) => {
  const { theme } = useThemeStore();
  const handleClick = () => {
    setShowSection(!showSection);
  };
  const user = useUserStore((state) => state.user);
  const t = useTranslations("burger");
  return (
    <section
      className={`profile__burger-info !pr-[24px]`}
      onClick={handleClick}
    >
      <div className={`flex items-center gap-[20px]`}>
        <div
          className={"relative min-h-[64px] min-w-[64px] z-10 cursor-pointer"}
        >
          <Avatar
            width={!showSection ? 100 : 63}
            height={!showSection ? 100 : 63}
            className="rounded-full object-contain translate-x-[10%] "
            // className="absolute bottom-[0] left-[50%] object-contain rounded-full min-w-[60px] z-50"
          />
          {/* <Image
            alt={"avatar"}
            src={"/main/avatar_noface.png"}
          /> */}
        </div>
        <div className="flex flex-col">
          {user?.email ? (
            <h5 className="text-[18px] max-w-[250px] overflow-x-hidden break-all">
              {user?.email}
            </h5>
          ) : (
            <h5 className="text-[18px] max-w-[250px] overflow-x-hidden">
              {user?.phone}
            </h5>
          )}
          {showSection && (
            <span className="text-[14px]">{t("profileSettings")}</span>
          )}
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
