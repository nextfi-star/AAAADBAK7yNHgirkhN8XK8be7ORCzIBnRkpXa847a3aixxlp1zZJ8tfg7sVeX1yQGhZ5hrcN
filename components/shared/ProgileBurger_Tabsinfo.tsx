import { ProfileBurger_shortcuts } from "./ProfileBurger_shortcuts";
import { ProfileBurger_assets } from "./ProfileBurger_assets";

interface Props {
  handleShortcutClick: (value: string) => void;
}

export const ProgileBurger_Tabsinfo = ({
  handleShortcutClick,
}: Props) => {
  return (
    <>
      <span className="profile__burger-devider" />

      <ProfileBurger_shortcuts handleShortcutClick={handleShortcutClick} />

      <span className="profile__burger-devider" />

      <ProfileBurger_assets handleShortcutClick={handleShortcutClick} />

      <span className="profile__burger-devider my-[27px]" />
    </>
  );
};
