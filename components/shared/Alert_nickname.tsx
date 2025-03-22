import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ArrowBracket from "../ui/ArrowBracket";
import { Input } from "../ui/input";
import { changeUserData } from "@/utils/api";
import { useUserStore } from "@/hooks/useUserData";
import { useRef } from "react";

interface Props {
  propsItem: React.ReactNode;
  className?: string;
}
export const Alert_nickname = ({ propsItem, className }: Props) => {
  const cancelAlertDialogref = useRef<HTMLButtonElement>(null);
  const closeDialog = () => {
    if (cancelAlertDialogref.current) {
      cancelAlertDialogref.current.click();
    }
  };

  const { theme } = useThemeStore();
  const user = useUserStore((state) => state.user);
  const t = useTranslations("profile");
  const [symbols, setSymbols] = useState<number | string | any>(0);
  const [message, setMessage] = useState("");
  const [inputs, setInputs] = useState({
    nickname: "",
    vcode: "",
  });

  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const trackSymbols = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    const value = e.target.value;
    if (value.length <= 20) {
      setInputs((prev) => ({ ...prev, [e.target.name]: value }));
      setSymbols(value.length);
    }
  };
  const handleSubmit = async () => {
    if (!user?.csrf || !inputs.nickname) {
      setMessage("Заполните все обязательные поля!");
      return;
    }

    if (!inputs.nickname) {
      setMessage("Заполните пустое поле");
      return;
    }

    setLoading(true);
    setMessage("");

    const result = await changeUserData(
      user.csrf,
      "change_uname",
      inputs.nickname,
      inputs.vcode
    );
    console.log(result.requires_verif);

    if (result.requires_verif) {
      setSent(true);
    }

    if (result.success) {
      setMessage("Никнейм успешно изменён!");
      console.log(result);
      useUserStore.getState().updateUser({ username: inputs.nickname });
      closeDialog();
    } else {
      setMessage(result.message);
    }

    setLoading(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={`border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[14px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] min-w-[100px] flex min-h-[28px] ${className}`}
        >
          {propsItem}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center  !overflow-y-auto bg-[#f9f9fa] dark:!bg-[#0c0c0c] modal-new">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
              <AlertDialogCancel
                className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0"
                ref={cancelAlertDialogref}
              >
                <ArrowBracket
                  className={"rotate-90"}
                  color={theme === "dark" ? "white" : "black"}
                  height={25}
                  width={25}
                />
              </AlertDialogCancel>
              <Link
                className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]"
                href="/profile"
              >
                {t("profileW")}
              </Link>
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>{" "}
            {t("changeNick")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex justify-center w-full ">
          <div className={"flex flex-col max-w-[600px] gap-[30px]"}>
            <span className="text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] flex flex-col items-center gap-[5px] md:flex-row md:items-start md:gap-[10px]">
              <Image
                alt="info"
                className="max-w-[19px] md:max-w-[23px] lg:max-w-[25px] w-full"
                height={20}
                quality={100}
                src={"/header_icons/profile_burger/info_icon.svg"}
                width={20}
              />
              {t("makeSure")}
            </span>
            <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full">
                {t("urNick")}
                <Input
                  className={`border border-solid shadow-none text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[12px] py-[20px] rounded-[30px]  ${symbols >= 20 ? "!border-danger-600" : "!border-[#4d4d4d]"} `}
                  placeholder={t("enter_nickname")}
                  type="text"
                  value={inputs.nickname}
                  name="nickname"
                  onChange={trackSymbols}
                />
              </label>
              <span className="text-[12px] sm:text-[18px] flex items-center justify-between w-full text-[#181818] dark:text-white">
                {t("canBe")}
                <span>{symbols}/20</span>
              </span>
            </AlertDialogDescription>
            <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]  flex flex-col items-start gap-[10px] w-full">
                {t("verification_code")}
                <Input
                  name="vcode"
                  placeholder={t("enterCode")}
                  value={inputs.vcode}
                  onChange={trackSymbols}
                  className="border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]"
                  rightButton={t("send_code_email")}
                  onClickRightButton={handleSubmit}
                  rightButtonDisabled={sent}
                />
              </label>
            </AlertDialogDescription>
          </div>
        </div>
        <AlertDialogFooter className="px-[30px] pt-[20px] h-fit items-center gap-[30px]">
          <button
            className={`text-[16px] px-[40px] rounded-[50px] text-[#0c0c0c] dark:text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] ${
              symbols < 4 ||
              symbols >= 20 ||
              inputs.vcode?.length < 6 ||
              !inputs.vcode
                ? "!bg-transparent cursor-not-allowed"
                : "bg-[#205bc9] hover:bg-[#205bc9] text-white border-none"
            }`}
            disabled={
              symbols < 4 ||
              symbols >= 20 ||
              inputs.vcode?.length < 6 ||
              !inputs.vcode
            }
            onClick={async () => sent && (await handleSubmit())}
            style={{
              padding: "8px 35px",
            }}
          >
            {t("confirm")}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
