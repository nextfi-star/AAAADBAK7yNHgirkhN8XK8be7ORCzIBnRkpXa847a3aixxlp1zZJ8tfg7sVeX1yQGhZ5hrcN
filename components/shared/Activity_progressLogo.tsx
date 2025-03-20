import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { Activity_modal } from "./Activity_modal";

const Activity_progressLogo = () => {
  const t = useTranslations("activity");
  const data = useMemo(
    () => [
      {
        title: "40%",
      },
      {
        title: "30%",
      },
      {
        title: "20%",
      },
      {
        title: "10%",
      },
      {
        title: "0%",
      },
    ],
    []
  );
  const data2 = useMemo(
    () => [
      {
        title: "100%",
      },
      {
        title: "90%",
      },
      {
        title: "80%",
      },
      {
        title: "70%",
      },
      {
        title: "60%",
      },
      {
        title: "50%",
      },
    ],
    []
  );
  return (
    <section className="w-full max-h-[476px] lg:py-[40px] xl:shadow-medium bg-none xl:dark:bg-[#3C3C3C66] lg:rounded-[1000px] backdrop-blur-[6px] flex flex-col items-center justify-center gap-[30px] lg:pr-[40px]">
      <div className="w-full lg:max-w-[70%] flex items-end justify-center gap-[10px] lg:gap-[20px] select-none relative">
        <div className="flex flex-col gap-[5px] lg:gap-[24px] items-start ">
          {data &&
            data.map((item, index) => (
              <div className="flex flex-row items-center gap-[5px]" key={index}>
                <p
                  className={`bg-${item.title === "0%" ? "[#3F7EF3]" : `gray-400`} h-[28px] lg:h-[48px] w-[28px] lg:w-[48px] text-[10px] lg:text-[18px] rounded-full flex items-center justify-center cursor-pointer transition duration shadow-medium text-white`}
                >
                  {item.title}
                </p>
                <span className="text-[#3F7EF3] whitespace-nowrap">----</span>
              </div>
            ))}
        </div>
        <Image
          src={"/main/activity/progress_logo.svg"}
          width={472}
          height={472}
          alt="Progress logo"
          priority
          quality={100}
          className="lg:-mt-[159px] max-w-[139px] lg:max-w-[350px] 2xl:max-w-[100%]"
        />
        <div className="flex flex-col gap-[5px] lg:gap-[24px] items-start">
          {data2 &&
            data2.map((item, index) => (
              <div className="flex flex-row items-center gap-[5px]" key={index}>
                <span className="text-[#3F7EF3] whitespace-nowrap">----</span>
                <p
                  className={`bg-${item.title === "0%" ? "[#3F7EF3]" : `gray-400`} h-[28px] lg:h-[48px] w-[28px] lg:w-[48px] text-[10px] lg:text-[18px] rounded-full flex items-center justify-center cursor-pointer transition duration shadow-medium text-white`}
                >
                  {item.title}
                </p>
              </div>
            ))}
        </div>

        <ul className="absolute -right-[150px] hidden xl:flex flex-col text-[#888888] text-[18px] gap-[10px]">
          <li className="before:content-['•'] before:mr-2 list-none">
            {t("particPrj")}
          </li>
          <li className="before:content-['•'] before:mr-2 list-none">
            {t("mksTrad")}
          </li>
          <li className="before:content-['•'] before:mr-2 list-none">
            {t("upgrade")}
          </li>
        </ul>
      </div>

      <ul className="flex xl:hidden flex-col text-[#888888] text-[18px]">
        <li className="before:content-['•'] before:mr-2 list-none">
          {t("particPrj")}
        </li>
        <li className="before:content-['•'] before:mr-2 list-none">
          {t("mksTrad")}
        </li>
        <li className="before:content-['•'] before:mr-2 list-none">
          {t("upgrade")}
        </li>
      </ul>
    </section>
  );
};

export default Activity_progressLogo;
