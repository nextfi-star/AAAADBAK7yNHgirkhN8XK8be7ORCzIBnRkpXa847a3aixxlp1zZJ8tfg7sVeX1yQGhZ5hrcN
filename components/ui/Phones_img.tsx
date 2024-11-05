"use client";
import Image from "next/image";
import React from "react";

import { useThemeStore } from "../../store";

export const Phones_img = () => {
  const { theme } = useThemeStore();

  return (
    <Image
      alt="phones"
      height={861}
      quality={100}
      src={
        theme === "dark" ? "/main/phones_dark.png" : "/main/mobile-phones.png"
      }
      width={820}
    />
  );
};
