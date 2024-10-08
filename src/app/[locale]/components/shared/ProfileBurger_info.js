import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../../../store'
import Image from 'next/image'

export const ProfileBurger_info = ({ username }) => {
  const { theme } = useThemeStore();

  return (
    <section className="profile__burger-info">
      <div className="flex items-center gap-[12px]">
        <div className="avatar relative bg-slate-100 rounded-full min-h-[64px] min-w-[64px] overflow-hidden">
          <Image
            width={63}
            height={63}
            alt={"profile"}
            priority
            src={"/header_icons/profile_burger/profile_avatar.svg"}
            className='absolute -bottom-[10px] left-[50%] translate-x-[-50%] '
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
