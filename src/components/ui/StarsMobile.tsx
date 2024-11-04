import React from "react";
interface Props {
  width?: string
  height?: string
}
const StarsMobile = ({ width = "40", height = "auto" }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="min-w-[40px]"
    >
      <defs>
        <clipPath id="clip4_3004">
          <rect
            id="Card/ ic_equalizer"
            rx="0.500000"
            width="23.000000"
            height="23.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <linearGradient
          x1="18.271307"
          y1="6.181376"
          x2="3.907670"
          y2="19.817741"
          id="paint_linear_4_3000_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.404729" stopColor="#205BC9" stopOpacity="0.000000" />
          <stop offset="1.000000" stopColor="#073D95" />
        </linearGradient>
      </defs>
      <path
        id="Star 2"
        d="M6.89 3.16L2.7 5.41C2.03 5.77 1.62 6.48 1.64 7.24L1.79 12L1.64 16.75C1.62 17.51 2.03 18.22 2.7 18.58L6.89 20.83L10.94 23.34C11.59 23.74 12.4 23.74 13.05 23.34L17.1 20.83L21.29 18.58C21.96 18.22 22.37 17.51 22.35 16.75L22.2 12L22.35 7.24C22.37 6.48 21.96 5.77 21.29 5.41L17.1 3.16L13.05 0.65C12.4 0.25 11.59 0.25 10.94 0.65L6.89 3.16ZM7.14 3.59L2.93 5.85C2.43 6.12 2.13 6.65 2.14 7.22L2.29 12L2.14 16.77C2.13 17.34 2.43 17.87 2.93 18.14L7.14 20.4L11.21 22.91C11.69 23.22 12.3 23.22 12.78 22.91L16.85 20.4L21.06 18.14C21.56 17.87 21.86 17.34 21.85 16.77L21.7 12L21.85 7.22C21.86 6.65 21.56 6.12 21.06 5.85L16.85 3.59L12.78 1.08C12.3 0.77 11.69 0.77 11.21 1.08L7.14 3.59Z"
        fill="#3F7EF3"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Star 1"
        d="M10.94 2.1L7.51 4.23L3.96 6.14C3.28 6.5 2.88 7.2 2.9 7.96L3.03 12L2.9 16.03C2.88 16.79 3.28 17.49 3.96 17.85L7.51 19.76L10.94 21.88C11.58 22.29 12.4 22.29 13.05 21.88L16.47 19.76L20.03 17.85C20.7 17.49 21.11 16.79 21.09 16.03L20.96 12L21.09 7.96C21.11 7.2 20.7 6.5 20.03 6.14L16.47 4.23L13.05 2.1C12.4 1.7 11.58 1.7 10.94 2.1Z"
        fill="#205BC9"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Star 1"
        d="M10.94 2.1L7.51 4.23L3.96 6.14C3.28 6.5 2.88 7.2 2.9 7.96L3.03 12L2.9 16.03C2.88 16.79 3.28 17.49 3.96 17.85L7.51 19.76L10.94 21.88C11.58 22.29 12.4 22.29 13.05 21.88L16.47 19.76L20.03 17.85C20.7 17.49 21.11 16.79 21.09 16.03L20.96 12L21.09 7.96C21.11 7.2 20.7 6.5 20.03 6.14L16.47 4.23L13.05 2.1C12.4 1.7 11.58 1.7 10.94 2.1Z"
        fill="url(#paint_linear_4_3000_0)"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <rect
        id="Card/ ic_equalizer"
        rx="0.500000"
        width="23.000000"
        height="23.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip4_3004)">
        <path
          id="Vector"
          d="M11 15C11 15.55 11.44 16 12 16C12.55 16 13 15.55 13 15L13 9C13 8.44 12.55 8 12 8C11.44 8 11 8.44 11 9L11 15ZM8 15C8 15.55 8.44 16 9 16C9.55 16 10 15.55 10 15L10 13C10 12.44 9.55 12 9 12C8.44 12 8 12.44 8 13L8 15ZM14 11.5L14 15C14 15.55 14.44 16 15 16C15.55 16 16 15.55 16 15L16 11.5C16 10.94 15.55 10.5 15 10.5C14.44 10.5 14 10.94 14 11.5Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default StarsMobile;
