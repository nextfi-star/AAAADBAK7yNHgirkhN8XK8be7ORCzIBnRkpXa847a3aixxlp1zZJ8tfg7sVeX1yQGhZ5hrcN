"use client";

import React from "react";

import Link from "next/link";

import ArrowUP from "../ui/ArrowUP";

import { useTranslations } from "next-intl";

export const Profile_news = () => {
  const t = useTranslations("profile");

  const dataNews = Array(10).fill({
    date: "11:24 am",
    news: "Kalshi seeks permission to trade political contracts amid CFTC appeal",
  });

  return (
    <div className="profile-news">
      <div className="profile-news-title">
        <span className="profile-news-title-first">{t("News")}</span>
        <span>
          {t("More news")} <ArrowUP />
        </span>
      </div>
      <span className="profile-news-date">September 25, 2024</span>
      <ul className="profile-news-list">
        <li className="profile-news-list-item">
          {dataNews.map(news => (
            <Link key={news.id} href="#" className="profile-news-list-item-link">
              <span className="news-date">{news.date}</span>
              {news.news}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};
