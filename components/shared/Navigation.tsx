import { useTranslations } from "next-intl";
import { NextPage } from "next";
import { Link } from '@/i18n/routing'

export const Navigation: NextPage = () => {
  const t = useTranslations("nav");

  return (
    <nav className="header__navigation header-nav flex items-center gap-[24px]">
      <a className="header__navigation-item" href="#">
        {t("home")}
      </a>
      <a className="header__navigation-item" href="#">
        {t("token")}
      </a>
      <Link className="header__navigation-item" href="/activity">
        {t("activity")}
      </Link>
      <a className="header__navigation-item" href="#">
        {t("app")}
      </a>
    </nav>
  );
};
