"use client";
import { usePathname } from "next/navigation";
import { NextPage } from "next";
import { Link } from "../../i18n/routing";
import { useThemeStore } from "@/store";
import { useTranslations } from 'next-intl'

export const Profile_nav: NextPage = () => {
  const currentPath = usePathname();
  const localeRegex = /^\/([a-zA-Z-]{2,5})\//;
  const localeMatch = currentPath.match(localeRegex);
  const locale = localeMatch ? localeMatch[1] : "en";
  const { verifyState } = useThemeStore();
  const t = useTranslations('shared')
  return (
    <nav className="flex items-end min-h-[11rem] mb-[4rem]">
      {verifyState ? (
        <ul className="flex items-center gap-2 pb-[.8rem]">
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/assets` ? "active" : ""
              }`}
              href={`/assets`}
            >
              {t('assets')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/deposit` ? "active" : ""
              }`}
              href={`/deposit`}
            >
              {t('deposit')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/swap` ? "active" : ""
              }`}
              href={`/swap`}
            >
              {t('swap')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/withdrawal` ? "active" : ""
              }`}
              href={`/withdrawal`}
            >
              {t('withdrawal')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/tier` ? "active" : ""
              }`}
              href={`/tier`}
            >
              {t('status')}
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
              {t('overview')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/profile` ? "active" : ""
              }`}
              href={`/profile`}
            >
              {t('profile')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/security` ? "active" : ""
              }`}
              href={`/security`}
            >
              {t('security')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/verify` ? "active" : ""
              }`}
              href={`/verify`}
            >
              {t('verification')}
            </Link>
          </li>
          <li>
            <Link
              className={`profile__nav-navbar-item ${
                currentPath === `/${locale}/devices` ? "active" : ""
              }`}
              href={`/devices`}
            >
              {t('authorized')}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
