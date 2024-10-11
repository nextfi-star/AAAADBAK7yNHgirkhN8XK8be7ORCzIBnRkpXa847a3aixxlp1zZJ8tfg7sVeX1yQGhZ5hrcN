"use client";
import React, { useEffect, useState } from "react";
import { useThemeStore } from "../../../../store";
import { NextPage } from "next";
import {
  Profile_balance,
  Profile_industry,
  Profile_info,
  Profile_news,
  Profile_payments,
  Profile_qr,
  Profile_verification,
} from "../../../../components/shared";

const Profile: NextPage = () => {
  const [verify, setVerify] = useState<boolean>(false);
  const { initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <section className="profile">
      <Profile_info setVerify={setVerify} verify={verify} />
      <div className="profile__grid gap-[24px] max-xl:grid max-xl:grid-cols-1">
        <div className="">
          <hr />
          {verify ? (
            <Profile_balance />
          ) : (
            <Profile_verification setVerify={setVerify} /> // Исправлено имя функции
          )}
          <Profile_payments />
        </div>

        <div className="max-w-[1331px] order-1">
          <Profile_industry unicClass="show__when" />
          <Profile_news />
          <Profile_qr />
        </div>
      </div>
    </section>
  );
};
export default Profile;
