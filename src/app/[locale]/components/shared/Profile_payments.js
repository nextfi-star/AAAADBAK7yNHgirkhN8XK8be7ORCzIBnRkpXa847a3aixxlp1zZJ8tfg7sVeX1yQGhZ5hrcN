'use client'
// В вашем компоненте Profile_payments.js
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StarsMobile from "../../components/ui/StarsMobile.js";
import ArrowUp from "../../components/ui/ArrowUP.js";
import ArrowBracket from "../ui/ArrowBracket.js"; // Иконка для открытия календаря

import { useTranslations } from "next-intl";

export const Profile_payments = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Чтобы отслеживать монтирование
  const t = useTranslations("profile");

  const dataPay = Array(6).fill().map((_, index) => ({
    icon: <StarsMobile />,
    destination: `Company Stocks`,
    amount: `$000.00`,
    percent: `+ 0,4%`,
    total: `$000.00`,
    id: index,  // Уникальный ключ для каждого элемента
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
    <div className="payments">
      <div className="flex justify-between gap-[32px] max-w-[1016px] items-center py-4 my-[20px]">
        <h3 className="text-[32px] font-semibold">Payments</h3>
        <span className="flex items-center text-[10px] md:text-[14px] gap-[15px] text-gray-100 relative ">
          Date: {startDate ? startDate.toLocaleDateString() : "Select start date"} -
          {endDate ? endDate.toLocaleDateString() : "Select end date"}
          {/* Кнопка для открытия календаря с иконкой */}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <ArrowBracket className={"text-[#515151]"} />
          </button>
          {isOpen && (
            <div className="absolute top-[100%] right-0 z-10 mt-2 border border-gray-300 rounded-md bg-[#3a3939] shadow-lg">
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
        <table className="table ">
          <thead>
            <tr className="text-[20px] text-white">
              <th>{t("Destination")}</th>
              <th>{t("The amount")}</th>
              <th>{t("Percent")}</th>
              <th>{t("Sum Total")}</th>
              <th>{t("Report")}</th>
            </tr>
          </thead>
          <tbody>
            {dataPay.map(item => (
              <tr key={item.id} className="text-[20px] items-center">
                <td className="py-[24px]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">{item.icon}</div>
                    </div>
                    <div>
                      <div className="font-bold">{item.destination}</div>
                    </div>
                  </div>
                </td>
                <td>{item.amount}</td>
                <td>{item.percent}</td>
                <td>{item.total}</td>
                <td className="flex gap-2 items-center py-[35px]">
                  {t("View Report")} <ArrowUp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="row-3">
        <div className="packages-ct">
          <div className="packages-cols-ct">
            <div className="col-1">
              <span>{t("Destination")}</span>
            </div>
            <div className="col">
              <p>{t("The amount")}</p>
            </div>
            <div className="col">
              <p>{t("Percent")}</p>
            </div>
            <div className="col">
              <p>{t("Sum Total")}</p>
            </div>
            <div className="col">
              <p>{t("Report")}</p>
            </div>
          </div>

          {dataPay.map((item, index) => (
            <div key={index} className="package">
              <div className="col-1">
                <p>
                  {item.icon} {item.destination}
                </p>
              </div>
              <div className="col">
                <p>{item.amount}</p>
              </div>
              <div className="col">
                <p>{item.percent}</p>
              </div>
              <div className="col">
                <p>{item.total}</p>
              </div>
              <div className="col">
                <p>
                  {t("View Report")} <ArrowUp />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
