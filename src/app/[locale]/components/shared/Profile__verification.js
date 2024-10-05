import React from "react";
import {Accept_icon} from "../ui/Accept_icon";
import { useTranslations } from "next-intl";
import { useThemeStore } from '../../../../store'

export const Profile_verification = ({ setVerify }) => {
  const t = useTranslations("profile");
  const {theme} = useThemeStore()
  return (
    <section className="profile__verification profile_blocks_border">
      <h3>{t("GetFullAccess")}</h3>
      <div className="profile__verification__blocks__list">
        <div className="profile__verification__info__block profile_blocks_border">
          <h5 className="profile__verification__info__block_step_text">{t("StepOne")}</h5>
          <h4 className="profile__verification__info__block_main_text">{t("CreateAccount")}</h4>
          <Accept_icon color={theme === 'dark' ? 'white' : 'black'}/>
        </div>
        <div className="profile__verification__info__block profile_blocks_border">
          <h5 className="profile__verification__info__block_step_text">{t("StepTwo")}</h5>
          <h4 className="profile__verification__info__block_main_text">{t("VerificationPersonality")}</h4>
          <p className="profile__verification__info__block_additional_text">{t("AdditionalTextInVerification")}</p>
          <button className="profile__verification__info__block_button" onClick={() => setVerify(prev => !prev)}>
            {t("VerificationButton")}
          </button>
        </div>
      </div>
    </section>
  );
};
