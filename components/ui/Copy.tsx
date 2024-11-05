interface Props {
  color: string;
}
const Copy = ({ color }: Props) => {
  return (
    <svg
      className="min-w-[20px] cursor-pointer"
      fill="none"
      height="24.000000"
      viewBox="0 0 24 24"
      width="24.000000"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip834_5641">
          <rect
            fill="white"
            fillOpacity="0"
            height="23.000000"
            id="Copy"
            rx="0.500000"
            transform="translate(0.500000 0.500000)"
            width="23.000000"
          />
        </clipPath>
      </defs>
      <rect
        fill={color}
        fillOpacity="0"
        height="23.000000"
        id="Copy"
        rx="0.500000"
        transform="translate(0.500000 0.500000)"
        width="23.000000"
      />
      <g clipPath="url(#clip834_5641)">
        <path
          d="M20 2L8 2C6.89 2 6 2.9 6 4L6 16C6 17.09 6.89 18 8 18L20 18C21.1 18 22 17.09 22 16L22 4C22 2.9 21.1 2 20 2ZM7.78 3.02Q7.89 3 8 3L20 3Q20.1 3 20.21 3.02Q20.3 3.04 20.38 3.07Q20.46 3.1 20.52 3.15Q20.62 3.21 20.7 3.29Q20.78 3.37 20.85 3.47Q20.89 3.54 20.92 3.61Q20.96 3.69 20.97 3.78Q21 3.88 21 4L21 16Q21 16.11 20.97 16.21Q20.96 16.3 20.92 16.38Q20.89 16.45 20.85 16.52Q20.78 16.62 20.7 16.7Q20.62 16.78 20.52 16.84Q20.46 16.89 20.38 16.92Q20.3 16.95 20.21 16.97Q20.1 17 20 17L8 17Q7.89 17 7.78 16.97Q7.69 16.95 7.61 16.92Q7.53 16.89 7.47 16.84Q7.37 16.78 7.29 16.7Q7.21 16.62 7.14 16.52Q7.1 16.45 7.07 16.38Q7.03 16.3 7.02 16.21Q7 16.11 7 16L7 4Q7 3.88 7.02 3.78Q7.03 3.69 7.07 3.61Q7.1 3.54 7.14 3.47Q7.21 3.37 7.29 3.29Q7.37 3.21 7.47 3.15Q7.53 3.1 7.61 3.07Q7.69 3.04 7.78 3.02ZM3 6.5C3 6.22 2.77 6 2.5 6C2.22 6 2 6.22 2 6.5L2 20.5C2 21.59 2.39 22 3.5 22L17.5 22C17.77 22 18 21.77 18 21.5C18 21.22 17.77 21 17.5 21L3 21L3 20L3 6.5Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="evenodd"
          id="Vector"
        />
      </g>
    </svg>
  );
};

export default Copy;
