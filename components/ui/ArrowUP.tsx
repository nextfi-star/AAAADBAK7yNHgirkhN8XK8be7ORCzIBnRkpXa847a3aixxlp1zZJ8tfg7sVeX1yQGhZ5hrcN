interface Props {
  className?: string;
}
const ArrowUP = ({ className }: Props) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4 4C9.8109 4 9.33333 4.47756 9.33333 5.06667C9.33333 5.65577 9.8109 6.13333 10.4 6.13333H16.3627L4.752 17.744C4.33668 18.1593 4.33668 18.8327 4.752 19.248C5.16732 19.6633 5.84068 19.6633 6.256 19.248L17.8667 7.63733V13.6C17.8667 14.1891 18.3442 14.6667 18.9333 14.6667C19.5224 14.6667 20 14.1891 20 13.6V5C20 4.44772 19.5523 4 19 4H10.4Z"
        fill="#515151"
      />
    </svg>
  );
};

export default ArrowUP;
