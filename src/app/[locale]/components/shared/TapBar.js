"use client";
import { useState, useEffect } from "react";
import HomeIcon from "../ui/HomeIcon";
import ChartIcon from "../ui/CharIcon";
import InvestingIcon from "../ui/InvestingIcon.js";
import TokenIcon from "../ui/TokenIcon.js";
import AssetsIcon from "../ui/AssetsIcon.js";
import { useThemeStore } from "../../../../store";

export const Tapbar = () => {
  // Достаем значение темы из состояния
  const { theme } = useThemeStore();

  // Локальное состояние для цвета
  const [color, setColor] = useState(theme === "dark" ? "#fff" : "#000");

  // Используем useEffect для отслеживания изменений темы и обновления цвета
  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#000");
  }, [theme]);

  return (
    <div
      className={`Tapbar fixed bottom-0 left-0 w-full flex justify-around items-center py-2 sm:hidden ${
        theme === "dark" ? "bg-[#3a3939]" : "bg-[#EFEFEF]"
      }`}
    >
      <div className="Tapbar__item">
        <HomeIcon color={color} />
        <p style={{ color }}>Home</p>
      </div>
      <div className="Tapbar__item">
        <ChartIcon color={color} />
        <p style={{ color }}>Activity</p>
      </div>
      <div className="Tapbar__item -mt-[40px]">
        <div className="flex justify-center items-center rounded-full w-16 h-16 shadow-lg bg-blue-700">
          <InvestingIcon color={color} />
        </div>
        <p style={{ color }}>Investing</p>
      </div>
      <div className="Tapbar__item">
        <TokenIcon color={color} fill={color === "#fff" ? "#3a3939" : "#fff"} />
        <p style={{ color }}>Token</p>
      </div>
      <div className="Tapbar__item">
        <AssetsIcon color={color} />
        <p style={{ color }}>Assets</p>
      </div>
    </div>
  );
};
