"use client";
import type { NextPage } from "next";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Preloader from "@/components/shared/Preloader";
import { useThemeStore } from "@/store";
import {
  Era,
  Faq,
  Get_started,
  Header,
  How,
  Intro,
  Invest,
  Levels,
} from "@/components/shared";

const Home: NextPage = () => {
  const { initializeTheme } = useThemeStore();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
      details.addEventListener("toggle", () => {
        AOS.refresh();
      });
    });

    return () => {
      detailsElements.forEach((details) => {
        details.removeEventListener("toggle", AOS.refresh);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header auth={false} />

      <Intro />

      <Era />

      <How />

      <Levels />

      <Get_started />

      <Invest />

      <Faq />
    </>
  );
};

export default Home;
