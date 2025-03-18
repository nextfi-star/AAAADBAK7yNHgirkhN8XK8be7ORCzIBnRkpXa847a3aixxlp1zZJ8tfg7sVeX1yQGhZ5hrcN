import { useThemeStore } from "@/store/useChatStore";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  forBox: string;
}

export const Checkbox = ({ content, forBox, ...props }: Props) => {
  const { theme } = useThemeStore();
  return (
    <div className="privacy max-w-[921px] flex flex-col justify-center">
      <label
        className="checkbox-label gap-[5px] md:gap-[18px] !items-center md:items-center"
        htmlFor={forBox}
      >
        <input
          className="checkbox"
          {...props}
          id={`${forBox}`}
          type="checkbox"
        />
        <span className="checkbox-view !m-0">
          <svg
            className="checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]"
            viewBox="0 0 511.985 511.985"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
              fill={theme === "dark" ? "#fff" : "#3A3939"}
            />
          </svg>
        </span>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left #888888 leading-[1]">
          {content}
        </p>
      </label>
    </div>
  );
};
