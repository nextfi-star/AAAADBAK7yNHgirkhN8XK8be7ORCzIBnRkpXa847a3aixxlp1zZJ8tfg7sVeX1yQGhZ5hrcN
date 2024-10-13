"use client";
import type { NextPage } from 'next';
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../../components/shared/Preloader";
import { Era, Get_started, How, Intro, Invest, Levels, Faq, Header } from "../../components/shared/index";
import { useEffect, useState } from "react";
import { useThemeStore } from "../../store";

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

    detailsElements.forEach(details => {
      details.addEventListener("toggle", () => {
        AOS.refresh();
      });
    });

    return () => {
      detailsElements.forEach(details => {
        details.removeEventListener("toggle", AOS.refresh);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 30);
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
}
export default Home