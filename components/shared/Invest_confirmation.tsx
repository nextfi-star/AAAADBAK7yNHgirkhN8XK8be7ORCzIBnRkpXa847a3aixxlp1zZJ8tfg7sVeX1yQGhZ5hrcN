import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useThemeStore } from "@/store/useChatStore";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "./Checkbox";
import Withdrawal_animation from "./Withdrawal_animation";
import { InvestData } from "@/app/[locale]/(profile)/invest/page";

interface Props {
  titleTrigger: string;
  input3: number;
  setInput3: (val: number) => void;
  selectedInvest: InvestData | null;
  setSelectedInvest: (val: null) => void;
  setInputStep2: (val: string) => void;
  className?: string;
  selectedCoin?: string;
  selectedIndustry?: string;
  onClick: () => void;
}
export const Invest_confirmation = ({
  className,
  titleTrigger,
  input3,
  setInput3,
  setInputStep2,
  selectedInvest,
  setSelectedInvest,
  selectedCoin,
  onClick,
}: Props) => {
  const t = useTranslations("invest");
  const {
    confirmationStep,
    setConfirmStep,
    setStep,
    setGlboalCompany,
    setInvests,
    setGlboalCompanyIcon,
    setGlobalPeriod,
    globalAmount,
    globalCoin,
    globalPeriod,
    investConfirmError,
  } = useThemeStore();
  const [checked, setChecked] = useState(false);
  const DropSteps = () => {
    setStep(1);
    setConfirmStep(1);
    setChecked(false);
    setInput3(0);
    setSelectedInvest(null);
    setInputStep2("");
    setGlboalCompany(null);
    setGlboalCompanyIcon(null);
    setGlobalPeriod(null);
    setInvests([]);
  };

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild className="!hover:bg-[#205BC9]">
        <Button
          className={`text-[16px] xl:text-[20px] flex items-center justify-center w-[156px] h-[52px] !py-[8px] hover:!bg-[#205BC9] rounded-[50px] ${Number(input3) > 0 ? "!bg-[#205BC9] text-[#EFEFEF]" : "bg-[#7676801F] text-[#888888]"} ${className}`}
          disabled={Number(input3) < 0}
        >
          {titleTrigger}
        </Button>
      </DialogTrigger>

      {confirmationStep === 1 && (
        <DialogContent className="max-w-[90%] md:max-w-[38rem] w-full p-0 rounded-[20px]">
          <DialogHeader>
            <DialogTitle className="text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full">
              {t("cmfrInvest")}
              <DialogClose asChild>
                <Cross2Icon className="h-[32px] w-[32px]" />
              </DialogClose>
            </DialogTitle>
            <Divider className="m-0 space-0" />
            <div className="p-[21px] flex flex-col gap-[28px]">
              <article className="dark:bg-[#7676801F] rounded-[6px] flex flex-col gap-[28px] py-[21px] px-[18px] md:px-[21px]">
                <div className="flex items-center w-full justify-between overflow-hidden">
                  <DialogDescription className="flex flex-col gap-[1px] text-[14px] md:text-[20px]">
                    {t("onChain")}
                  </DialogDescription>

                  <DialogDescription className="flex items-center justify-end gap-[1px] md:gap-[16px] dark:text-white text-[12px] md:text-[20px] w-full ">
                    <span className="p-[5px] text-white bg-[#205BC9] rounded-[4px] ]">
                      {selectedCoin}
                    </span>
                    {selectedInvest?.name}
                  </DialogDescription>
                </div>
                <div className="flex items-center w-full justify-between">
                  <DialogDescription className="flex flex-col gap-[1px] text-[14px] md:text-[20px] items-baseline">
                    {t("actualAmount")}
                  </DialogDescription>

                  <DialogDescription className="flex items-center gap-[4px] dark:text-white text-[14px] md:text-[20px]">
                    {globalAmount} {globalCoin?.name} | {globalPeriod?.name}{" "}
                    days | {globalPeriod?.percent}%
                  </DialogDescription>
                </div>
              </article>
              <Checkbox
                forBox="confirm"
                checked={isConfirmed}
                onChange={() => setIsConfirmed((prev) => !prev)}
                content={t("iCmfrWith")}
              />
            </div>
          </DialogHeader>
          <Divider className="m-0" />
          <DialogFooter
            className="flex flex-row justify-center items-center 
          gap-[15px] p-[30px_40px]"
          >
            <div className="w-full text-red-600">{investConfirmError}</div>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className={`border-1 w-fit border-solid dark:border-[#fff] rounded-[50px] bg-transparent hover:bg-transparent min-w-[124px]`}
              >
                {t("close")}
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={onClick}
              variant="secondary"
              className="bg-[#205BC9] text-white w-fit rounded-[50px] hover:bg-[#205BC9] min-w-[124px]"
              disabled={!isConfirmed}
            >
              {t("contin")}
            </Button>
          </DialogFooter>
        </DialogContent>
      )}

      {confirmationStep === 3 && (
        <DialogContent className="max-w-[90%] md:max-w-[576px] w-full p-0 rounded-[20px]">
          <DialogHeader>
            <DialogTitle className="text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full">
              <DialogClose asChild>
                <Cross2Icon className="h-[32px] w-[32px] pointer-events-none opacity-0" />
              </DialogClose>
            </DialogTitle>
            <Divider className="m-0" />
            <div className="p-[21px] flex flex-col gap-[28px]">
              <article className="relative rounded-[6px] flex flex-col items-center justify-end p-[21px__21px__0__21px]">
                <div className="absolute left-[50%] -top-[46%] md:-top-[84%] translate-x-[-50%]">
                  <Withdrawal_animation />
                </div>
                <DialogDescription className="text-[25px] font-bold dark:text-white text-[#0c0c0c] min-h-[150px] w-full flex flex-col justify-end items-center">
                  {t("withApli")}
                </DialogDescription>
              </article>
            </div>
          </DialogHeader>
          <Divider className="m-0" />
          <DialogFooter className="flex sm:justify-center items-center gap-[15px] p-[30px_40px]">
            <DialogClose asChild>
              <Button
                onClick={DropSteps}
                type="button"
                variant="secondary"
                className="bg-[#205BC9] w-full text-white rounded-[50px] hover:bg-[#205BC9] max-w-[124px] h-[48px] relative"
              >
                {t("comfirm")}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};
