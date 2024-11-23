"use client";
import { useEffect } from "react";

import { useThemeStore } from "../../store";
import { Moon, SunMoon } from 'lucide-react'

interface Props {
  width?: string;
}
export default function Theme_switch({ width }: Props) {
  const { theme, setTheme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  };

  return (
    <button className="theme-switch" onClick={toggleTheme}>
     <Moon strokeWidth={1} />
    </button>
  );
}
