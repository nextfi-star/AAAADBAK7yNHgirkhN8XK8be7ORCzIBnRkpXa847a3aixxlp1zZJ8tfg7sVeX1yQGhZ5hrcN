import React from "react";

import { useTranslations } from "next-intl";

export const Profile_verification = ({ setVirify }) => {
  const t = useTranslations("profile");

  return (
    <section className="profile__verification profile_blocks_border">
      <h3>{t("GetFullAccess")}</h3>
      <div className="profile__verification__blocks__list">
        <div className="profile__verification__info__block profile_blocks_border">
          <h5 className="profile__verification__info__block_step_text">{t("StepOne")}</h5>
          <h4 className="profile__verification__info__block_main_text">{t("CreateAccount")}</h4>
        </div>
        <div className="profile__verification__info__block profile_blocks_border">
          <h5 className="profile__verification__info__block_step_text">{t("StepTwo")}</h5>
          <h4 className="profile__verification__info__block_main_text">{t("VerificationPersonality")}</h4>
          <p className="profile__verification__info__block_additional_text">{t("AdditionalTextInVerification")}</p>
          <button className="profile__verification__info__block_button" onClick={() => setVirify(prev => !prev)}>
            {t("VerificationButton")}
          </button>
        </div>
      </div>
    </section>
  );
};
