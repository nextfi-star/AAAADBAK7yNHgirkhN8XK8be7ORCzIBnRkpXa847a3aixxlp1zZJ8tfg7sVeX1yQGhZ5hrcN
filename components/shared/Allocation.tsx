"use client";
import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ReserveModal } from "./ReserveModal";

const Allocation = () => {
  const { theme } = useThemeStore();
  const t = useTranslations("allocation");
  const user = useUserStore((state) => state.user);
  const data = useMemo(
    () => [
      {
        dot: "bg-blue-500",
        name: t("balance"),
        cell: (
          <span className="flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]">
            $0.01{" "}
            <span className="text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]">
              0.03%
            </span>
          </span>
        ),
      },
      {
        dot: "bg-blue-600",
        name: t("bonus"),
        cell: (
          <span className="flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]">
            $0.01{" "}
            <span className="text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]">
              0.03%
            </span>
          </span>
        ),
      },
      {
        dot: "dark:bg-white bg-[#414141]",
        name: t("investment"),
        cell: (
          <span className="flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]">
            $0.01{" "}
            <span className="text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]">
              0.03%
            </span>
          </span>
        ),
      },
      {
        dot: "dark:bg-white bg-[#414141]",
        name: t("percentages"),
        cell: (
          <span className="flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]">
            $0.01{" "}
            <span className="text-[14px] !text-[#BDBDBD] dark:!text-[#BDBDBD]">
              0.03%
            </span>
          </span>
        ),
      },
    ],
    []
  );

  return (
    <section className="dark:!bg-[#1e1e1e66] !bg-[#fff] !shadow-medium dark:!shadow-none rounded-[30px] p-[33.5px_40px] flex flex-col gap-[20px]">
      <h3 className="text-[14px] md:text-[20px] 2xl:text-[25px] w-full flex items-center justify-between">
        {t("nextfiReserve")}
        <ReserveModal />
      </h3>
      <div className="w-full min-h-[10px] rounded-[30px] bg-[#3f7ef3]" />
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[14px] md:text-[19px] xl:text-[25px]">
          {t("investConfidently")}
        </h1>
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[14px] md:text-[16px] xl:text-[18px]">
            {t("guaranteeProfits")}
          </span>
          <span className="text-[14px] md:text-[16px] xl:text-[18px]">
            {t("youInvest")}
          </span>
          <p className="text-[14px] md:text-[16px] xl:text-[18px]">
            {t("moreUsers")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Allocation;
