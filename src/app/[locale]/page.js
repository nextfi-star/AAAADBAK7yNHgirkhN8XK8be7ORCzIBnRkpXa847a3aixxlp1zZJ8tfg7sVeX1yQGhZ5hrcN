"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/shared/Preloader";
import { Era, Get_started, How, Intro, Invest, Levels, Faq, Header } from "./components/shared/index";
import { useEffect, useState } from "react";
import { useThemeStore } from '../../store'

export default function Home() {
  const { initializeTheme } = useThemeStore();
  const [loading, setLoading] = useState(true);
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
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header hasTest={false}/>

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
