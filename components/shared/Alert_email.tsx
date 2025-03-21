"use client";
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
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/hooks/useUserData";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { changeUserData } from "@/utils/api";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ArrowBracket from "../ui/ArrowBracket";

interface Props {
  propsItem: React.ReactNode;
}

export const Alert_email = ({ propsItem }: Props) => {
  const { theme } = useThemeStore();
  const user = useUserStore((state) => state.user);
  const [inputs, setInputs] = useState({
    newEmail: "",
    newEmailAuth: "",
    currentEmailAuth: "",
    authenticatorApp: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const isDisabled = Object.values(inputs).some((value) => value.length < 3);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!user?.csrf || !inputs.newEmail || !inputs.newEmailAuth) {
      setMessage("Заполните все обязательные поля!");
      return;
    }

    // Валидация email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputs.newEmail)) {
      setMessage("Неверный формат email!");
      return;
    }

    setLoading(true);
    setMessage("");

    const result = await changeUserData(
      user.csrf,
      "change_email",
      inputs.newEmail,
      inputs.newEmailAuth
    );

    if (result.success) {
      setMessage("Email успешно изменён!");
      useUserStore.getState().updateUser({ email: inputs.newEmail });
    } else {
      setMessage(result.message);
    }

    setLoading(false);
  };

  const t = useTranslations("security");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] flex min-w-[100px] min-h-[28px]">
          {propsItem}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center !overflow-y-auto bg-[#f9f9fa] dark:!bg-[#0c0c0c] modal-new">
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
              <AlertDialogCancel className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0">
                <ArrowBracket
                  className={"rotate-90"}
                  color={theme === "dark" ? "white" : "black"}
                  height={25}
                  width={25}
                />
              </AlertDialogCancel>
              <Link
                className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]"
                href="/security"
              >
                {t("security")}
              </Link>
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>{" "}
            {t("changeemail")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex justify-center gap-[10px] w-full mb-[20px]">
          <div className="flex flex-col max-w-[512px] w-full gap-[20px]">
            <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full">
                {t("newEmail")}
                <Input
                  name="newEmail"
                  placeholder={t("enterEmail")}
                  value={inputs.newEmail}
                  onChange={handleChange}
                  className="border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]"
                />
              </label>
            </AlertDialogDescription>
            <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]  flex flex-col items-start gap-[10px] w-full">
                {t("newEmailAuth")}
                <Input
                  name="newEmailAuth"
                  placeholder={t("enterCode")}
                  value={inputs.newEmailAuth}
                  onChange={handleChange}
                  className="border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]"
                  rightButton={t("send_code_email")}
                  onClickRightButton={handleSubmit}
                />
              </label>
            </AlertDialogDescription>
            {/* <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full">
                {t("currEmailAuth")}
                <Input
                  name="currentEmailAuth"
                  placeholder={t("enterCode")}
                  value={inputs.currentEmailAuth}
                  onChange={handleChange}
                  className="border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]"
                />
              </label>
            </AlertDialogDescription>
            <AlertDialogDescription
              className={"w-full flex flex-col gap-[10px]"}
            >
              <label className="text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full">
                {t("authApp")}
                <Input
                  name="authenticatorApp"
                  placeholder={t("enterCode")}
                  value={inputs.authenticatorApp}
                  onChange={handleChange}
                  className="border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]"
                />
              </label>
            </AlertDialogDescription> */}
          </div>
        </div>
        {message && <p className="text-center text-red-500">{message}</p>}
        <AlertDialogFooter className="px-[30px] pt-[15px] h-fit items-center gap-[30px]">
          <Button
            onPress={handleSubmit}
            className={`text-[16px] px-[40px] rounded-[50px] text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  ${
              isDisabled || loading
                ? "!bg-[#205BC9]"
                : "bg-[#205bc9] hover:bg-[#205bc9] text-white border-none"
            }`}
          >
            {loading ? <Spinner /> : t("confirm")}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
