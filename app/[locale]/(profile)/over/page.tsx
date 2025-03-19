"use client";
import {
  Profile_balance,
  Profile_industry,
  Profile_info,
  Profile_news,
  Profile_payments,
  Profile_qr,
  Profile_verification,
} from "@/components/shared";
import Invest_Table from "@/components/shared/Invest_Table";
import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Overview = () => {
  const pathname = usePathname();
  const [verify, setVerify] = useState<boolean>(false);
  const { setVerifyState } = useThemeStore();
  const user = useUserStore((state) => state.user);
  const toggleActive = () => {
    setVerify((prev) => !prev);
  };
  useEffect(() => {
    if (pathname !== "/assets") {
      setVerifyState(false);
    } else {
      setVerifyState(true);
    }
  }, [pathname]);

  return (
    <section className="profile">
      <Profile_info toggleActive={toggleActive} verify={verify} />
      <div className="profile__grid gap-[1.5rem] max-xl:grid max-xl:grid-cols-1">
        <div className="flex flex-col gap-[1.5rem] h-full items-stretch justify-start">
          {user && user.verification === 2 ? (
            <Profile_balance />
          ) : (
            <Profile_verification verify={verify} />
          )}
          <Invest_Table title="Payments" />
        </div>

        <div className="max-w-[1331px] flex flex-col gap-[1.5rem]">
          <Profile_industry unicClass="show__when" />
          <Profile_news />
          <Profile_qr />
        </div>
      </div>
    </section>
  );
};

export default Overview;
