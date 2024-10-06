import { Link } from "../../../../i18n/routing";
import { useTranslations } from "next-intl";

export const Profile_nav = () => {
  const t = useTranslations("profile");

  return (
    <nav className="flex items-end min-h-[0] sm:min-h-[9rem] mb-10">
      <ul className="flex items-center gap-2 ">
        <li>
          <Link href="/over" className={`profile__nav-navbar-item active`}>
            {t("Overview")}
          </Link>
        </li>
        <li>
          <Link href="/profile" className={`profile__nav-navbar-item`}>
            {t("Profile")}
          </Link>
        </li>
        <li>
          <Link href="/safety" className={`profile__nav-navbar-item`}>
            {t("Safety")}
          </Link>
        </li>
        <li>
          <Link href="/settings" className={`profile__nav-navbar-item `}>
            {t("Settings")}
          </Link>
        </li>
        <li>
          <Link href="/third-party" className={`profile__nav-navbar-item`}>
            {t("Third-party authorization")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
