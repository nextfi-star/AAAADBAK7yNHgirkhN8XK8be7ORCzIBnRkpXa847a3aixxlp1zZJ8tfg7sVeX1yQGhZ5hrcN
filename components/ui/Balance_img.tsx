"use client";
import Image from "next/image";

import { useThemeStore } from "@/store";

export const Balance_img = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <div className="getstarted__big-content__item">
        <div className="getstarted__image-wrapper">
          <Image
            alt="balance"
            height={192}
            quality={100}
            src={
              theme === "dark"
                ? "/main/Card_finance.png"
                : "/main/getstarted-balance.png"
            }
            width={280}
          />
        </div>
        <a className="btn btn-blue btn-none" href="#">
          Top up your balance
        </a>
      </div>

      <div className="getstarted__big-content__item">
        <div className="getstarted__image-wrapper">
          <Image
            alt="income"
            height={192}
            quality={100}
            src={
              theme === "dark"
                ? "/main/Card_finance-1.png"
                : "/main/getstarted-income.png"
            }
            width={280}
          />
        </div>
        <a className="btn btn-blue btn-none" href="#">
          Withdraw money
        </a>
      </div>

      {/* <div className="getstarted__big-content__image">
        <Image
          alt="stats"
          className="stats__image w-auto"
          height={396}
          width={396}
          quality={100}
          src={
            theme === "dark"
              ? "/main/investment_dark.png"
              : "/main/getstarted-stats.png"
          }
        />
      </div> */}
    </>
  );
};
