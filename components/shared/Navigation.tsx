import { useTranslations } from "next-intl";
import { NextPage } from "next";

export const Navigation: NextPage = () => {
  const t = useTranslations("nav");

  return (
    <nav className="header__navigation header-nav flex items-center gap-[24px]">
      <a className="header__navigation-item" href="">
        {t("home")}
      </a>
      <a className="header__navigation-item" href="">
        {t("token")}
      </a>
      <a className="header__navigation-item" href="">
        {t("activity")}
      </a>
      <a className="header__navigation-item" href="">
        {t("how")}
      </a>
      <a className="header__navigation-item" href="">
        {t("listing")}
      </a>
      <a className="header__navigation-item" href="">
        {t("app")}
      </a>
      <a className="header__navigation-item" href="">
        {t("faq")}
      </a>
    </nav>
  );
};
