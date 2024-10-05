import React from "react";

import { useTranslations } from "next-intl";

import Ic_equalizer from "../ui/Ic_equalizer";

export const Profile_industry = () => {
  const t = useTranslations("profile");

  return (
    <section className="profile__industy profile_blocks_border">
      <h3 className="profile__industry__main_text">{t("ChooseIndustry")}</h3>
      <div className="profile__industry__block profile_blocks_border">
        <div className="profile__industry__block__image">
          <Ic_equalizer />
          <h4 className="profile__industry__image_text">Company Stocks</h4>
        </div>
        <p className="profile__industry__additional_text">
          Tracking successful promotions and ensuring financial security in trading on the market.
        </p>
      </div>

      <button className="profile__industry__button btn-blu">Next</button>
    </section>
  );
};
