import { useTranslations } from "next-intl";
import { ProfileBurger_accordeon } from "./ProfileBurger_accordeon";
import { capitalize } from "./utils";

interface Props {
  showSection: boolean;
  activeTab: string;
  handleTabClick: (value: string) => void;
}

export const ProfileBurger_menu_list = ({
  showSection,
  activeTab,
  handleTabClick,
}: Props) => {
  const t = useTranslations("shared");
  return (
    <>
      <div className="flex justify-between items-center pb-[9px] border-0 border-b border-solid border-[#fff] w-full">
        {["profile", "security", "verification", "devices"].map((tab) => (
          <span
            key={tab}
            className={`cursor-pointer ${
              activeTab === tab ? "tab__active" : ""
            }`}
            onClick={() => handleTabClick(capitalize(tab))}
          >
            {t(tab)}
          </span>
        ))}
      </div>

      <ProfileBurger_accordeon
        activeTab={activeTab}
        showSection={showSection}
      />
    </>
  );
};
