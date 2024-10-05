"use client";

import React, { use, useEffect, useState } from "react";

import {
  Profile_industry,
  Profile_info,
  Profile_nav,
  Profile_verification,
  Profile_news,
  Profile_payments,
  Profile_qr,
  Profile_balance,
} from "../components/shared";
import { Mobile_tapbar } from "../components/shared/Mobile_tapbar";
import { useThemeStore } from '../../../store'

const Page = () => {
  const {initializeTheme} = useThemeStore();
  const [verify, setVirify] = useState(false);
  console.log(verify);
  useEffect(() => {
    initializeTheme(); 
  }, [initializeTheme]);
  return (
    <section className="profile">
      <Profile_nav />
      <Profile_info />
      <div className="profile__divided  ">
        <div className="flex items-center ">
          {verify ? <Profile_balance /> : <Profile_verification setVirify={setVirify} />}
          {/* <Profile_balance /> */}
          <Profile_industry />
        </div>
        <aside>
          <Profile_payments />
          <Profile_news />
          <Profile_qr />
        </aside>
      </div>
      <Mobile_tapbar />
    </section>
  );
};

export default Page;
