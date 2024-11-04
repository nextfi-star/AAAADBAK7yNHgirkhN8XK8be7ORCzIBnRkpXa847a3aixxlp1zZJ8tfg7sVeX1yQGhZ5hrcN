'use client'
import {useEffect} from "react";
import { useThemeStore } from '../../store'

export const CloseBtn = () => {
	const {theme, initializeTheme} = useThemeStore()

	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme === 'dark' ? 'white' : '#3a3939'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
