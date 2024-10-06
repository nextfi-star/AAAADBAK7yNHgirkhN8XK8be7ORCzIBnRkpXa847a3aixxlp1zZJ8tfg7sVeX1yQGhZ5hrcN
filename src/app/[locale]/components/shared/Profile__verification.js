"use client";

import React from "react";
import { Accept_icon } from "../ui/Accept_icon";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../../../../store";

export const Profile_verification = ({ setVerify }) => {
  const t = useTranslations("profile");
  const { theme } = useThemeStore();

  return (
    <>
      <section className="profile__verification profile_blocks_border">
        <h3>{t("GetFullAccess")}</h3>
        <div className="profile__verification__blocks__list">
          <div className="profile__verification__info__block profile_blocks_border">
            <h5 className="profile__verification__info__block_step_text">{t("StepOne")}</h5>
            <h4 className="profile__verification__info__block_main_text">{t("CreateAccount")}</h4>
            <Accept_icon color={theme === "dark" ? "white" : "black"} />
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

      <section className="w-full container mb-[40px] verify_mobile">
        <h5 className="w-full text-[20px] mb-[32px] ">Get full access to the platform</h5>  
        <div className="w-full bg-[#515151] rounded-[10px]">
          <div className="max-w-[50%] min-h-[12px] bg-[#3F7EF3] rounded-[10px]"></div>
        </div>
        <div className="w-full  flex justify-between">
          <span className='text-[12px]'>Sign Up</span>
          <span className='text-[12px]'>Verify identity</span>
          <span className='text-[12px]'>Deposit</span>
        </div>
        <button
          className="w-fit text-[14px] font-medium py-[10px] px-[30px] bg-[#205BC9] rounded-[50px] "
          onClick={() => setVerify(prev => !prev)}
        >
          Verify now
        </button>
      </section>
    </>
  );
};
