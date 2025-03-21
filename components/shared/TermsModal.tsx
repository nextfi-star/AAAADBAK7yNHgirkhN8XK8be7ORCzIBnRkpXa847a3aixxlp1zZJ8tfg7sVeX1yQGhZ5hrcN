import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ArrowBracket from "../ui/ArrowBracket";

export function TermsModal() {
  const t = useTranslations("terms");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-0 text-[18px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] text-black hover:cursor-pointer shadow-none">
          {t("termsOfService")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[1200px] bg-white dark:bg-[#111] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[1px] sm:!top-[176px] md:!top-[176px]">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
              <AlertDialogCancel className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0">
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
            {t("termsOfService")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("introduction")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("agreementToTerms")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("updatesChanges")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("accountRegistration")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("usersOver18")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("identityVerification")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("financialTransactions")}
            </p>

            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("transactionFees")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("acceptableUse")}
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("usersMayNot")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("fraudulentActivities")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("unauthorizedAccess")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("automatedBots")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("riskDisclosure")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("investingRisks")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("nextfiNoGuarantee")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold tept-[24px] xl:text-[32px]">
              {t("accountSuspension")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("nextfiRightToSuspend")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground ">
              {t("usersReceiveNotice")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("intellectualProperty")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("allNextfiTrademarks")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("usersMayNotReproduce")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("governingLaw")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("termsGoverned")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("disputesResolved")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("changesToTerms")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("usersNotified")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg fopt-semibold text-[24px] xl:text-[32px]">
              {t("contactInformation")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("usersCan")}
            </span>
            <span className="flex items-center gap-[10px] text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("supportContact")}{" "}
              <span className="text-[#205bc9]">{t("email")}</span>
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <AlertDialogCancel
            asChild
            className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0 my-[3.5rem] w-full"
          >
            <Button className="p-0 text-[20px] outline outline-1 rounded-[40px] px-[1.5rem] outline-white bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none max-w-[150px] !my-[2.5rem]">
              {t("close")}
            </Button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
