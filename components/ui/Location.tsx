import { NextPage } from "next";
import React from "react";

interface Props {
  color: string;
  className: string;
}

export const Location: NextPage<Props> = ({ color, className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="142.000000"
      viewBox="0 0 92 142"
      width="92.000000"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip18_5216">
          <rect
            fill={color}
            fillOpacity="0"
            height="141.000000"
            id="1491254387-pindestinationmaplocation_82942 1"
            rx="0.500000"
            transform="translate(0.500000 0.500000)"
            width="91.000000"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip18_5216)">
        <path
          d="M71.47 7.75C55.99 -2.59 35.99 -2.59 20.52 7.75C0.58 21.04 -5.79 46.95 5.67 68L46 142L86.31 68C97.78 46.95 91.42 21.04 71.47 7.75ZM78.35 63.66L46 123.03L13.65 63.66C4.44 46.76 9.56 25.98 25.56 15.31C31.77 11.16 38.88 9.08 46 9.08C53.11 9.08 60.22 11.15 66.43 15.3C82.43 25.98 87.56 46.76 78.35 63.66Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
          id="Vector"
        />
        <path
          d="M46 18.92C33.49 18.92 23.3 29.12 23.3 41.64C23.3 54.16 33.49 64.36 46 64.36C58.5 64.36 68.69 54.16 68.69 41.64C68.69 29.12 58.52 18.92 46 18.92ZM46 55.27C38.49 55.27 32.38 49.16 32.38 41.64C32.38 34.13 38.49 28.01 46 28.01C53.5 28.01 59.61 34.13 59.61 41.64C59.61 49.16 53.5 55.27 46 55.27Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
          id="Vector"
        />
      </g>
    </svg>
  );
};
