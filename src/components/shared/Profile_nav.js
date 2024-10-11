"use client";

import { usePathname } from "next/navigation";
import { Link } from "../../i18n/routing";

export const Profile_nav = () => {
  const currentPath = usePathname();
  const localeRegex = /^\/([a-zA-Z-]{2,5})\//;
  const localeMatch = currentPath.match(localeRegex);
  const locale = localeMatch ? localeMatch[1] : "en"; // по умолчанию "en"

  return (
    <nav className="flex items-end min-h-[11rem] mb-[4rem]">
      <ul className="flex items-center gap-2 ">
        <li>
          <Link
            href={`/over`}
            className={`profile__nav-navbar-item ${currentPath === `/${locale}/over` ? "active" : ""}`}
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            href={`/profile`}
            className={`profile__nav-navbar-item ${currentPath === `/${locale}/profile` ? "active" : ""}`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href={`/security`}
            className={`profile__nav-navbar-item ${currentPath === `/${locale}/security` ? "active" : ""}`}
          >
            Security
          </Link>
        </li>
        <li>
          <Link href={`/verification`} className="profile__nav-navbar-item">
            Verification
          </Link>
        </li>
        <li>
          <Link href={`/thirdparty`} className="profile__nav-navbar-item">
            Third-party authorization
          </Link>
        </li>
      </ul>
    </nav>
  );
};
