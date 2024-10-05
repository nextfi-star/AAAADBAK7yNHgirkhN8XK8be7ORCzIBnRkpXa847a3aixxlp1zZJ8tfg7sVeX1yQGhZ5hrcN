import React from "react";

import { useTranslations } from "next-intl";

import Copy from "../ui/Copy";
import Avatar from "../ui/Avatar";

export const Profile_info = () => {
  const t = useTranslations("profile");

  return (
    <section className="hidden sm:block profile__info profile_blocks_border">
      <div className="profile__info__block__left">
        <div className="profile__info__block__left__avatar">
          <Avatar />
        </div>
        <div className="profile__info__block__left__text">
          <h3 className="profile__info__block__left__text_name ">Sergey Sergey</h3>
          <p className="profile__info__block__left__text_email">Sergey@mail.ru</p>
          <p className="profile__info__block__left__text__id">
            32132131213111 <Copy />
          </p>
        </div>
      </div>
      <div className="profile__info__block__right">
        <div className="profile__info__block___right__block">
          <h5 className="profile__info__block___right__main__text">{t("Verification")}</h5>
          <button className="profile__info__block___right__verification_block__button profile__info__block___right__additional__text">
            {t("GoThroughVerification")}
          </button>
        </div>
        <div className="profile__info__block___right__block">
          <h5 className="profile__info__block___right__main__text">{t("CountryRegion")}</h5>
          <select className="profile__info__block___right__additional__text" name="" id="">
            <option value="">UAE</option>
          </select>
        </div>
        <div className="profile__info__block___right__block">
          <h5 className="profile__info__block___right__main__text">{t("CommisionLevel")}</h5>
          <p className="profile__info__block___right__additional__text">Level 1</p>
        </div>
      </div>
    </section>
  );
};
