import ArrowBracket from "../ui/ArrowBracket";
import { useThemeStore } from "../../../../store";
import Image from "next/image";

export const ProfileBurger_info = ({ username, setShowSection, showSection }) => {
  const { theme } = useThemeStore();
  const handleClick = () => {
    setShowSection(!showSection);
  };
  return (
    <section className="profile__burger-info" onClick={handleClick}>
      <div className="flex items-center gap-[12px]">
        <div className="avatar relative rounded-full min-h-[64px] min-w-[64px] overflow-hidden">
          <Image
            src={"/main/avatar.png"}
            width={63}
            height={63}
            alt={"avatar"}
            className="absolute bottom-[0] left-[50%] translate-x-[-50%] "
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-[18px]">{username} </h5>
          <span className="text-[14px]">Profile Settings</span>
        </div>
      </div>
      <ArrowBracket color={theme === "dark" ? "white" : "black"} width={25} height={25} className={"-rotate-90"} />
    </section>
  );
};
