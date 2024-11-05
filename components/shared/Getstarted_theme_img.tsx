import React from "react";
import Image from "next/image";
import { NextPage } from "next";

import { useThemeStore } from "../../store";

const images = [
  {
    alt: "balance",
    dark: "/main/Card_finance.png",
    light: "/main/getstarted-balance.png",
  },
  {
    alt: "another-image",
    dark: "/main/Card_finance-1.png",
    light: "/main/getstarted-income.png",
  },
];

export const Getstarted_theme_img: NextPage = () => {
  const { theme } = useThemeStore();

  return (
    <>
      {images.map((image) => (
        <Image
          key={image.alt}
          alt={image.alt}
          height={280}
          src={theme === "dark" ? image.dark : image.light}
          width={280}
        />
      ))}
    </>
  );
};
