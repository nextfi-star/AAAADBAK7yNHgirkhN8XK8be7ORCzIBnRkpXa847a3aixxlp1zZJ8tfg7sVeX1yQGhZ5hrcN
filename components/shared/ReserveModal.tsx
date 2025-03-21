import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ArrowBracket from "../ui/ArrowBracket";

export const ReserveModal = () => {
  const t = useTranslations("allocation");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="default"
          className="flex items-center rounded-[50px] text-[16px] xl:text-[20px] font-medium px-[15px] border border-solid dark:border-white border-black"
        >
          {t("readMore")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[1200px] bg-white dark:bg-[#111] px-[1rem] m-auto overflow-y-auto pb-[5.5rem]">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
              <AlertDialogCancel className="text-black dark:text-white dark:bg-[#111] text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0">
                <ArrowBracket
                  className={"rotate-90"}
                  color={"currentColor"}
                  height={25}
                  width={25}
                />
              </AlertDialogCancel>
            </span>{" "}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
          <AlertDialogTitle className="text-[24px] xl:text-[32px]">
            {t("howReserveSystem")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4">
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("investmentsWithoutRisk")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("userReceives")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("ifAiInvestment")}</p>
            <p className="text-[18px] xl:text-[24px]">
              {t("userDoesNotLearn")}
            </p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("howReserveFormed")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("reserveCreated")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("weMonitor")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("onMainPage")}</p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("aiDevelopment")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">
              {t("eachNewInvestment")}
            </p>
            <p className="text-[18px] xl:text-[24px]">{t("overTime")}</p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("focusOnInnovation")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("ourAiDoesnt")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("everyDay")}</p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("maximumTrust")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("youDontHave")}</p>
            <p className="text-[18px] xl:text-[24px]">
              {t("nextfiReserveFund")}
            </p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("nextfiExclusivity")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("unlikeOther")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("itsNotJust")}</p>
          </AlertDialogHeader>
          <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
            <AlertDialogTitle className="text-[24px] xl:text-[32px]">
              {t("largeScaleGoal")}
            </AlertDialogTitle>
            <p className="text-[18px] xl:text-[24px]">{t("theMoreUsers")}</p>
            <p className="text-[18px] xl:text-[24px]">{t("youAreBecoming")}</p>
          </AlertDialogHeader>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
