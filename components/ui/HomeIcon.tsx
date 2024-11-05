interface Props {
  width: number;
  color: string;
}
const HomeIcon = ({ width = 22, color }: Props) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 22 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0181 0.501851L21.3569 10.3308H19.1305H18.6305V10.8308V19.5H13.8913V13.3315V12.8315H13.3913H8.60869H8.10869V13.3315V19.5H3.36953V10.8308V10.3308H2.86953H0.643066L10.9819 0.501851C10.9829 0.501621 10.9841 0.501388 10.9854 0.501167C10.9897 0.500451 10.9947 0.5 11 0.5C11.0053 0.5 11.0103 0.500451 11.0146 0.501167C11.0159 0.501388 11.0171 0.501621 11.0181 0.501851Z"
        fill="none"
        stroke={color}
      />
    </svg>
  );
};

export default HomeIcon;
