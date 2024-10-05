"use client";

import React, { useEffect, useState } from "react";

import {
  Profile_industry,
  Profile_info,
  Profile_nav,
  Profile_verification,
  Profile_news,
  Profile_payments,
  Profile_qr,
  Profile_balance,
  Header,
} from "../components/shared";
import { useThemeStore } from "../../../store";
import {Tapbar} from "../components/shared/Tapbar";
const Profile = () => {
  const [verify, setVerify] = useState(false); // Исправлена опечатка
  const { initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  return (
    <section className="profile">
      <Header auth={true} />
      <Profile_nav />
      <Profile_info verify={verify} />

      <div className="profile__grid gap-[190px] max-xl:grid max-xl:grid-cols-1">
        <div className="">
          {verify ? (
            <Profile_balance />
          ) : (
            <Profile_verification setVerify={setVerify} /> // Исправлено имя функции
          )}
          <Profile_industry />
        </div>
        <div className="flex flex-col items-stretch">
          <Profile_payments />
          <Profile_news />
          <Profile_qr />
        </div>
      </div>

      <Tapbar />
    </section>
  );
};

export default Profile;
