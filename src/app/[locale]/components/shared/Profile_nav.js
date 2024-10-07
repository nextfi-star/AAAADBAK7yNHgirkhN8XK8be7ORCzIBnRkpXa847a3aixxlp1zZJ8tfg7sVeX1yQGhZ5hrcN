import { Link } from "../../../../i18n/routing";
import { useTranslations } from "next-intl";

export const Profile_nav = () => {
  const t = useTranslations("profile");

  return (
    <nav className="flex items-end min-h-[0] sm:min-h-[11rem] mb-10">
      <ul className="flex items-center gap-2 ">
        <li>
          <Link href="/over" className={`profile__nav-navbar-item active`}>
            Overview
          </Link>
        </li>
        <li>
          <Link href="/profile" className={`profile__nav-navbar-item`}>
            Profile
          </Link>
        </li>
        <li>
          <Link href="/security" className={`profile__nav-navbar-item`}>
            Security
          </Link>
        </li>
        <li>
          <Link href="/verification" className={`profile__nav-navbar-item `}>
            Verification
          </Link>
        </li>
        <li>
          <Link href="/thirdparty" className={`profile__nav-navbar-item`}>
            Third-party authorization
          </Link>
        </li>
      </ul>
    </nav>
  );
};
