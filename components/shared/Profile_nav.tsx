"use client";
import { usePathname } from "next/navigation";
import { NextPage } from "next";

import { Link } from "../../i18n/routing";

import { useThemeStore } from "@/store";

export const Profile_nav: NextPage = () => {
  const currentPath = usePathname();
  const localeRegex = /^\/([a-zA-Z-]{2,5})\//;
  const localeMatch = currentPath.match(localeRegex);
  const locale = localeMatch ? localeMatch[1] : "en";
  const { verifyState } = useThemeStore();

  return (
    <nav className="flex items-end min-h-[11rem] mb-[4rem]">
      {verifyState ? (
        <ul className="flex items-center gap-2 pb-[.8rem]">
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/over` ? "active" : ""
              }`}
              href={`/over`}
            >
              Assets
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/profile` ? "active" : ""
              }`}
              href={`/profile`}
            >
              Deposit
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/security` ? "active" : ""
              }`}
              href={`/security`}
            >
              Swap
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/verify` ? "active" : ""
              }`}
              href={`/verify`}
            >
              Withdrawl
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/devices` ? "active" : ""
              }`}
              href={`/devices`}
            >
              Commision Level
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-2 pb-[.8rem]">
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/over` ? "active" : ""
              }`}
              href={`/over`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/profile` ? "active" : ""
              }`}
              href={`/profile`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/security` ? "active" : ""
              }`}
              href={`/security`}
            >
              Security
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/verify` ? "active" : ""
              }`}
              href={`/verify`}
            >
              Verification
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/devices` ? "active" : ""
              }`}
              href={`/devices`}
            >
              Authorized Devices
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
