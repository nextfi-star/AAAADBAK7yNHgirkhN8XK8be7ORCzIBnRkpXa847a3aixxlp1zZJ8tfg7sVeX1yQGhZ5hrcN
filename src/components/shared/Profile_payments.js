"use client";
// В вашем компоненте Profile_payments.js
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StarsMobile from "../../components/ui/StarsMobile.js";
import ArrowUp from "../../components/ui/ArrowUP.js";
import ArrowBracket from "../ui/ArrowBracket.js";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../../store/index.js";
import { Profile_industry } from "./Profile__industry.js";

export const Profile_payments = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations("profile");
  const { theme } = useThemeStore();

  const dataPay = Array(6)
    .fill()
    .map((_, index) => ({
      icon: <StarsMobile />,
      destination: `Company Stocks`,
      amount: `$000.00`,
      percent: `${index % 2 === 0 ? "+ 0.4%" : "- 0.4%"}`, // Меняем знак через один
      total: `$000.00`,
      id: index,
    }));

  useEffect(() => {
    setStartDate(new Date());
    setEndDate(new Date());
    setIsMounted(true);
  }, []);

  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Profile_industry unicClass={"hidden__when"} />

      <div className="payments">
        <div className="flex justify-between gap-[32px] max-w-[1016px] items-center py-4 my-[20px]">
          <h3 className="text-[18px] md:text-[32px] font-semibold">Payments</h3>
          <span className="flex items-center text-[10px] md:text-[14px] gap-[15px] data__picker relative ">
            Date:{" "}
            {startDate
              ? startDate
                  .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
                  .replace(/\./g, "/")
              : "Select start date"}{" "}
            -
            {endDate
              ? endDate
                  .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
                  .replace(/\./g, "/")
              : "Select end date"}
            {/* Кнопка для открытия календаря с иконкой */}
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <ArrowBracket
                color={theme === "dark" ? "white" : "black"}
                width={25}
                height={25}
                className={"text-[#515151] dark:text-red-500"}
              />
            </button>
            {isOpen && (
              <div className="absolute top-[100%] right-0 z-10 mt-2 border border-gray-300 rounded-md  shadow-lg text-white">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              </div>
            )}
          </span>
        </div>
        <div className="overflow-x-auto flex">
          <table className="table">
            <thead>
              <tr className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white ">
                <th>{t("Destination")}</th>
                <th>{t("The amount")}</th>
                <th>{t("Percent")}</th>
                <th className="hidden xl:table-cell">{t("Sum Total")}</th>
                <th className="hidden xl:inline-block">{t("Report")}</th>
              </tr>
            </thead>
            <tbody>
              {dataPay.map((item, index) => (
                <tr key={item.id} className="text-[14px] sm:text-[16px] md:text-[20px] items-center">
                  <td className="py-[24px]">
                    <div className="flex items-center gap-0">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">{item.icon}</div>
                      </div>
                      <div>
                        <div className="font-bold company__title">{item.destination}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.amount}</td>
                  <td className={index % 2 === 0 ? "!text-green-600" : "!text-rose-600"}>{item.percent}</td>
                  <td className="hidden xl:table-cell">{item.total}</td>
                  <td className="hidden xl:flex gap-2 items-center py-[35px]">
                    {t("View Report")} <ArrowUp />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className='view__more'>View More</button>
      </div>
    </>
  );
};
