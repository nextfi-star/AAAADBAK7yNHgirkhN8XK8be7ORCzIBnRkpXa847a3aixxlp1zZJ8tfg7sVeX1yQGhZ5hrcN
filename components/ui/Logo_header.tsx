import { NextPage } from 'next'
interface Props {
  className?: string
}
export const Logo_header: NextPage<Props> = ({className}) => {
  return (
    <div className="svg__container">
      <svg
        className={`theme-icon ${className}`}
        fill="none"
        height="52.000000"
        viewBox="0 0 124 52"
        width="124.000000"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="38.912384"
            id="filter_250_71772_dd"
            width="11.339844"
            x="0.386719"
            y="27.328094"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="0" dy="15" />
            <feGaussianBlur stdDeviation="0" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect_dropShadow_1"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect_dropShadow_1"
              mode="normal"
              result="shape"
            />
          </filter>
          <clipPath id="clip250_71770">
            <rect
              fill="white"
              fillOpacity="0"
              height="51.000000"
              id="Логотип 1"
              rx="0.500000"
              transform="translate(0.500000 0.500000)"
              width="123.000000"
            />
          </clipPath>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint_linear_250_71771_0"
            x1="39.059345"
            x2="35.085522"
            y1="17.722038"
            y2="40.349701"
          >
            <stop stopColor="#0097FF" />
            <stop offset="1.000000" stopColor="#005CE0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint_linear_250_71773_0"
            x1="6.057449"
            x2="6.057449"
            y1="27.328077"
            y2="51.240486"
          >
            <stop stopColor="#3C01BE" />
            <stop offset="1.000000" stopColor="#7400FF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint_linear_250_71774_0"
            x1="39.192707"
            x2="0.008492"
            y1="33.780643"
            y2="33.780643"
          >
            <stop stopColor="#5CCEFF" />
            <stop offset="1.000000" stopColor="#0054FD" />
          </linearGradient>
        </defs>
        <rect
          fill="#FFFFFF"
          fillOpacity="0"
          height="51.000000"
          id="Логотип 1"
          rx="0.500000"
          transform="translate(0.500000 0.500000)"
          width="123.000000"
        />
        <g clipPath="url(#clip250_71770)">
          <path
            d="M32.17 17.27L31.1 16.83C29.77 16.27 29.47 14.47 30.55 13.55L43.42 2.59C44.56 1.63 46.31 2.38 46.49 3.9L48.55 21.36C48.72 22.82 47.31 23.89 46 23.31L45.36 23.03C44.42 22.62 43.35 23.04 42.95 24L42.19 25.81C41.36 28.05 40.42 30.59 39.41 33.41C36 42.86 29.32 39.81 26.71 37.14L30.62 26.86C30.64 26.73 30.67 26.6 30.72 26.47L32.01 23.17L33.25 19.77C33.61 18.79 33.13 17.67 32.17 17.27Z"
            fill="url(#paint_linear_250_71771_0)"
            fillOpacity="1.000000"
            fillRule="evenodd"
            id="Vector"
          />
          <g filter="url(#filter_250_71772_dd)">
            <path
              d="M11.72 28.04L11.72 45.54C11.72 48.69 9.18 51.24 6.05 51.24C2.92 51.24 0.38 48.69 0.38 45.54L0.38 35.14C3.07 26.19 9.06 26.77 11.72 28.04Z"
              fill="url(#paint_linear_250_71773_0)"
              fillOpacity="1.000000"
              fillRule="nonzero"
              id="Vector"
            />
          </g>
          <path
            d="M12.33 18.41C4.23 13.67 -1.01 20.17 0.16 37.02C4.1 24.51 11.02 30.64 14.44 35.78C15.75 37.74 18.96 41.95 22.54 46.57C26.39 51.53 29.73 51.57 31.23 50.98C37.11 48.6 40.67 35.67 40.82 29.41C36.67 39.47 32.54 41.75 27.7 37.24C26.28 35.92 24.84 34.17 23.44 32.29C21.53 29.71 19.5 27.39 18.1 25.13C17.34 23.92 14.33 19.58 12.33 18.41Z"
            fill="url(#paint_linear_250_71774_0)"
            fillOpacity="1.000000"
            fillRule="nonzero"
            id="Vector"
          />
          <path
            className="logo"
            d="M54.77 51.73C48.69 51.73 44.6 47.1 44.6 41.41C44.6 35.71 48.88 31.01 54.77 31.01C60.67 31.01 64.75 35.71 64.75 41.41C64.75 41.97 64.72 42.58 64.6 43.23L49.9 43.23C50.46 45.54 52.2 47.17 54.77 47.17C56.97 47.17 58.67 46.04 59.58 44.52L63.55 47.52C61.96 49.98 58.67 51.73 54.77 51.73ZM49.9 39.39L59.61 39.39C59.05 37.19 57.19 35.41 54.7 35.41C52.28 35.41 50.46 37.04 49.9 39.39ZM63.22 51.24L70.59 41.37L63.6 31.5L69.69 31.5L73.69 37.76L77.85 31.5L83.83 31.5L76.83 41.44L84.2 51.24L78 51.24L73.73 44.94L69.31 51.24L63.22 51.24ZM92.79 51.24C88.9 51.24 86.78 49.41 86.78 45.12L86.78 35.86L84.02 35.86L84.02 31.5L86.78 31.5L86.78 27.51L91.89 26.98L91.89 31.5L96.04 31.5L96.04 35.86L91.89 35.86L91.89 44.86C91.89 46.11 92.49 46.68 93.47 46.68L95.59 46.68L95.59 51.24L92.79 51.24ZM98.87 51.24L98.87 24.67L114.4 24.67L114.4 29.45L104.16 29.45L104.16 35.67L114.21 35.67L114.21 40.38L104.16 40.38L104.16 51.24L98.87 51.24ZM117.24 51.24L117.24 31.5L122.35 31.5L122.35 51.24L117.24 51.24ZM116.71 26.83C116.71 25.2 118.03 23.83 119.78 23.83C121.55 23.83 122.84 25.2 122.84 26.83C122.84 28.54 121.55 29.87 119.78 29.87C118.03 29.87 116.71 28.5 116.71 26.83Z"
            fill="currentColor"
            fillOpacity="1.000000"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
};
