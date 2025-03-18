interface Props {
  className?: string;
  width?: number;
  color?: string;
  height?: number;
}
const ArrowBracket = ({ className, width, color, height }: Props) => {
  return (
    <svg
      className={className}
      fill="black"
      height="24"
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5164 8.49796C19.2616 8.22063 18.8324 8.19625 18.5478 8.44293L12.3275 13.8339C12.1395 13.9968 11.8605 13.9968 11.6725 13.8339L5.45224 8.44293C5.16761 8.19625 4.73842 8.22063 4.48357 8.49796C4.21857 8.78634 4.24346 9.23647 4.53864 9.49386L11.6714 15.7135C11.8597 15.8777 12.1403 15.8777 12.3286 15.7135L19.4614 9.49386C19.7565 9.23647 19.7814 8.78634 19.5164 8.49796Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowBracket;
