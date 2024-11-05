"use client";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import { useThemeStore } from "@/store";
import {
  Profile_balance,
  Profile_industry,
  Profile_info,
  Profile_news,
  Profile_payments,
  Profile_qr,
  Profile_verification,
} from "@/components/shared";
import Allocation from "@/components/shared/Allocation";
import Transaction from "@/components/shared/Transactions";

const Profile: NextPage = () => {
  const [verify, setVerify] = useState<boolean>(false);
  const { initializeTheme, verifyState } = useThemeStore();
  const toggleActive = () => {
    setVerify((prev) => !prev);
  };

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <>
      {verifyState ? (
        <section className="profile">
          <div className="profile__grid gap-[24px] max-xl:grid max-xl:grid-cols-1">
            <div>
              <hr />
              <Profile_balance />
              <Profile_payments />
            </div>

            <div className="max-w-[1331px]">
              <Allocation />
              <Transaction />
            </div>
          </div>
        </section>
      ) : (
        <section className="profile">
          <Profile_info toggleActive={toggleActive} verify={verify} />
          <div className="profile__grid gap-[24px] max-xl:grid max-xl:grid-cols-1">
            <div>
              <hr />
              {verify ? (
                <Profile_balance />
              ) : (
                <Profile_verification toggleActive={toggleActive} />
              )}
              <Profile_payments />
            </div>

            <div className="max-w-[1331px]">
              <Profile_industry unicClass="show__when" />
              <Profile_news />
              <Profile_qr />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
