"use client";
import { useThemeStore } from "@/store/useChatStore";
import { Button } from "@heroui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SecIcon } from "../ui/SecIcon";
import { SkeletonCard_invest } from "../ui/skeleton/SkeletonCard_invest";
import { Invest_progressBar } from "./Invest_progressBar";
import { industries } from "./Invest_steps";
import NotFoundItem from "./NotFoundItem";

interface UserBalance {
  data: {
    amount: number;
    coin: string;
    price_usdt: number;
    value_usdt: number;
  }[];
  invests: Array<any>;
  response: string;
  total_invest_value: number;
  total_usdt_value: number;
}

export const Invest_card = () => {
  const { globalCompany, globalCompanyIcon, globalPeriod } = useThemeStore();
  const [state, setState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setChange(!change);
      setIsLoading(false);
    }, 800);
  };

  const [userBalance, setUserBalance] = useState<UserBalance | null>(null);
  const [invests, setInvests] = useState<any[]>([]);

  useEffect(() => {
    const fetchInvestData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://nextfi.io:5000/api/v1/user_balance",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              csrf: String(JSON.parse(localStorage.getItem("userData")!).csrf),
            }),
          }
        );

        const data = await response.json();
        console.log(data);

        const invests = await Promise.all(
          data.invests
            .filter(
              (value: any, index: number, self: any) =>
                index === self.findIndex((t: any) => t.coin === value.coin)
            )
            .map(
              async (i: {
                amount: number;
                coin: string;
                price_usdt: number;
                value_usdt: number;
              }) => {
                const responseInvest = await fetch(
                  "https://nextfi.io:5000/api/v1/invest_history",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      csrf: String(
                        JSON.parse(localStorage.getItem("userData")!).csrf
                      ),
                      coin: i.coin,
                    }),
                  }
                );

                const responseData = await responseInvest.json();

                return responseData.data.map((invest: any) => ({
                  ...invest,
                  packet: industries.find((val) => val.id === invest.packet),
                }));
              }
            )
        );

        // console.log(invests.flat());

        setInvests(invests.flat());
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }

      // setUserBalance(data);
    };

    fetchInvestData();
  }, []);

  console.log(invests);

  return (
    <>
      {!invests?.length && !isLoading ? (
        <div className="bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px]  max-w-[650px] w-full flex justify-center items-center">
          <NotFoundItem
            content="No records found"
            subContent="Get started with your investment transaction "
          />
        </div>
      ) : (
        <>
          {isLoading ? (
            <SkeletonCard_invest />
          ) : (
            <>
              {invests.slice(0, 2).map((val) => (
                <div
                  className="bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px]  max-w-[650px] w-full"
                  key={val.uid}
                >
                  <div className="p-[18px_23px] flex w-full flex-col sm:flex-row items-center justify-between">
                    <Image
                      src={
                        globalCompanyIcon?.avatar ?? "/main/invest/stocks.svg"
                      }
                      width={60}
                      height={60}
                      alt="icon"
                    />
                    <p className="text-[19px] sm:text-[20px] text-[#3A3939] dark:text-[#eeeeee] font-medium">
                      {val.packet.name}
                    </p>
                    <Invest_progressBar
                      progress={Math.min(
                        ((new Date().getTime() / 1000 - val.create_time) /
                          val.rtime) *
                          100,
                        100
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-[13px] items-center px-[12px] sm:px-[18px] py-[28px]">
                    <div className="w-full flex items-center justify-between gap-[10px]">
                      <p className="text-[16px] sm:text-[20px] text-[#888888] font-medium">
                        Amount of investment: {userBalance?.total_usdt_value}{" "}
                        USDT
                      </p>
                      <p className="sm:text-[20px] text-[#888888] font-medium">
                        Period: {val.rtime / 60 / 60 / 24} days
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-between pb-[23px]">
                      <p className="text-[14px] sm:text-[20px] text-[#888888] font-medium">
                        Remaining period: {val.packet?.periodFrom}-
                        {val.packet?.periodTo} days
                      </p>
                      <p className="text-[14px] flex-shrink-0 sm:text-[20px] text-[#888888] font-medium">
                        Percent: {val.percent}%
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-between pb-[23px]">
                      <p className="sm:text-[20px] text-[#888888] font-medium">
                        Amount at the moment
                      </p>
                      <p className="sm:text-[32px] text-[#888888] font-bold">
                        {val.amount} {val.coin}
                      </p>
                    </div>

                    <div className="flex flex-col sm:gap-[15px] gap-[20px] sm:flex-row items-center justify-between w-full sm:mb-[20px]">
                      <span className="flex gap-2 items-center">
                        <SecIcon cls="lock min-w-[30px]" /> Early withdrawal
                      </span>
                      <Button
                        className="max-w-[188px] w-full p-[8px_4px] text-white bg-[#205BC9] rounded-[50px]"
                        onClick={handleChange}
                        disabled
                      >
                        Withdraw funds
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
      {/* 
      {globalCompany && globalCompanyIcon && globalPeriod && (
        <>
          {!state && (
            <div className="bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px] max-w-[650px] w-full">
              <div className="p-[18px_41px]">
                <h1 className="text-[18px] sm:text-[24px] font-medium dark:text-[rgb(239,239,239)]">
                  Transaction processing
                </h1>
              </div>
              <Divider orientation="horizontal" />
              <div className="flex flex-col gap-[13px] items-center px-[12px] sm:px-[18px] py-[27px]">
                <div className="flex items-center gap-[2px]">
                  <Image
                    src={globalCompanyIcon?.avatar ?? "/main/invest/stocks.svg"}
                    width={60}
                    height={60}
                    alt="icon"
                  />
                  <p className="text-[19px] sm:text-[20px] text-[#3A3939] dark:text-[#eeeeee] font-medium">
                    {globalCompany?.name ?? "Company Stocks"}
                  </p>
                </div>

                <Invest_progressBar progress={50} />

                <div className="w-full flex items-center justify-between">
                  <p className="text-[16px] sm:text-[20px] text-[#888888] font-medium">
                    Percentage of early withdrawal
                  </p>
                  <p className="text-[20px] text-[#888888] font-medium">
                    {globalPeriod?.percent}%
                  </p>
                </div>

                <div className="w-full flex items-center justify-between pb-[23px]">
                  <p className="text-[16px] sm:text-[20px] text-[#888888] font-medium">
                    Amount to be received
                  </p>
                  <p className="text-[20px] sm:text-[32px] text-[#888888] font-bold">
                    7389 NextFi
                  </p>
                </div>

                <Button
                  className="max-w-[188px] w-full p-[8px_4px] bg-[#29292B] text-white rounded-[50px]"
                  disabled
                >
                  Get
                </Button>
              </div>
              <Divider orientation="horizontal" className="mb-[37px]" />
            </div>
          )}
        </>
      )} */}
    </>
  );
};
