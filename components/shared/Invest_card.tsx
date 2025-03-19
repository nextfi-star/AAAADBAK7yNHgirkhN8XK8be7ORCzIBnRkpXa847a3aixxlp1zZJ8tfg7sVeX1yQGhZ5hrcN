"use client";
import { useThemeStore } from "@/store/useChatStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SecIcon } from "../ui/SecIcon";
import { SkeletonCard_invest } from "../ui/skeleton/SkeletonCard_invest";
import { Invest_progressBar } from "./Invest_progressBar";
import { industries } from "./Invest_steps";
import NotFoundItem from "./NotFoundItem";
import { useUserStore } from "@/hooks/useUserData";
import { ArrowDown, ArrowUp } from "lucide-react";

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
  const {
    globalCompany,
    globalCompanyIcon,
    globalPeriod,
    setInvests,
    invests,
    packets,
  } = useThemeStore();
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
                  amountMoment: invest.amount,
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
  }, [invests.length]);

  const { csrf } = useUserStore();

  const [showingCards, setShowingCards] = useState(2);

  const onDeleteInvest = async (
    coin: string,
    packet_name: string,
    amount: number,
    id: number,
    isDisabled: boolean
  ) => {
    if (isDisabled) return;

    const industry_found = industries.find((val) => val.name === packet_name);

    try {
      const body = {
        csrf,
        coin,
        amount: parseFloat(String(amount)),
        packet: industry_found?.id,
        id,
        type: "invest_close",
      };
      const response = await fetch(
        "https://nextfi.io:5000/api/v1/invest_action",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      setInvests([]);
    } catch (e) {
      console.error(e);
    }
  };

  const visibleInvests = invests.filter((val) => val.status !== 0);
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
              {showingCards > 2 && (
                <div
                  className="flex justify-center w-full cursor-pointer"
                  onClick={() => setShowingCards((prev) => prev - 2)}
                >
                  <ArrowUp />
                </div>
              )}
              {visibleInvests
                .slice(showingCards - 2, showingCards)
                .map((val, index) => (
                  <div
                    className="bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px]  max-w-[650px] w-full"
                    key={index}
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
                          Amount of investment: {val.amount} USDT
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
                          Amount <br /> at the moment
                        </p>
                        <p className="sm:text-[28px] text-[#888888] font-bold">
                          {(
                            (val.amount / 100) *
                              Math.min(
                                ((new Date().getTime() / 1000 -
                                  val.create_time) /
                                  val.rtime) *
                                  100,
                                100
                              ) +
                            val.amount
                          ).toFixed(6)}{" "}
                          {val.coin}
                        </p>
                      </div>

                      <div
                        className={`flex flex-col sm:gap-[15px] gap-[20px] sm:flex-row items-center justify-${
                          Math.min(
                            ((new Date().getTime() / 1000 - val.create_time) /
                              val.rtime) *
                              100,
                            100
                          ) >= 100
                            ? "center"
                            : "between"
                        }  w-full sm:mb-[20px]`}
                      >
                        {!(
                          Math.min(
                            ((new Date().getTime() / 1000 - val.create_time) /
                              val.rtime) *
                              100,
                            100
                          ) >= 100
                        ) && (
                          <span className="flex gap-2 items-center">
                            <SecIcon cls="lock min-w-[30px]" /> Early withdrawal
                          </span>
                        )}

                        <Button
                          color="secondary"
                          // className=" text-white w-fit rounded-[50px] hover:bg-[#205BC9] min-w-[124px]"
                          className={`max-w-[188px] w-full p-[8px_4px] text-white bg-[#205BC9] rounded-[50px]`}
                          onClick={() =>
                            onDeleteInvest(
                              val.coin,
                              val.packet.name,
                              val.amount,
                              val.id,
                              !(
                                Math.min(
                                  ((new Date().getTime() / 1000 -
                                    val.create_time) /
                                    val.rtime) *
                                    100,
                                  100
                                ) >= 100
                              )
                            )
                          }
                          disabled={
                            !(
                              Math.min(
                                ((new Date().getTime() / 1000 -
                                  val.create_time) /
                                  val.rtime) *
                                  100,
                                100
                              ) >= 100
                            )
                          }
                        >
                          Withdraw funds
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

              {showingCards <= visibleInvests.length - 1 && (
                <div
                  className="flex justify-center w-full cursor-pointer"
                  onClick={() => setShowingCards((prev) => prev + 2)}
                >
                  <ArrowDown />
                </div>
              )}
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
