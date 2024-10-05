import React from "react";

import Link from "next/link";

import { useTranslations } from "next-intl";

export const Profile_nav = () => {
  const t = useTranslations("profile");

  return (
    <nav className="profile__nav">
      <ul className="profile__nav-navbar">
        <li>
          <Link href="#" className={`profile__nav-navbar-item active`}>
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
