"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ArrowBracket from "../ui/ArrowBracket";
import { RussiaMap } from "../ui/RussiaMap";
import { Choose_region } from "./Choose_region";
import { useUserStore } from "@/hooks/useUserData";
import { Spinner } from "@heroui/spinner";

interface Props {
  propsItem: React.ReactNode;
}

export const ViewRegion = ({ propsItem }: Props) => {
  const { theme } = useThemeStore();
  const [indexItem, setIndex] = useState(false);
  const t = useTranslations("profile");
  const user = useUserStore((state) => state.user);
  return (
    <>
      {indexItem ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] flex min-h-[28px]">
              {propsItem}
            </Button>
          </DrawerTrigger>

          <DrawerContent className="!z-[99] pb-[2px] bg-white dark:bg-black min-h-[100dvh] max-h-[70%] modal-holder mobile-holder modal-new">
            <DrawerHeader className="pt-[.5rem]">
              <DrawerTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]">
                <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
                  <DrawerClose asChild>
                    <Button className=" text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0">
                      <ArrowBracket
                        className={"rotate-90"}
                        color={theme === "dark" ? "white" : "black"}
                        height={25}
                        width={25}
                      />
                    </Button>
                  </DrawerClose>
                  <Link
                    className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]"
                    href="/verify"
                  >
                    {t("verify")}
                  </Link>
                  <ArrowBracket
                    className={"-rotate-90"}
                    color={theme === "dark" ? "white" : "black"}
                    height={25}
                    width={25}
                  />
                </span>
                {t("country/region")}
              </DrawerTitle>

              <DrawerDescription className="text-black dark:text-white flex gap-[30px] lg:gap-[40px] flex-col items-center w-full b-[6rem] 2xl:pb-0">
                <span className="flex flex-col gap-[20px] items-center max-w-[623px] pb-[1rem]">
                  <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] text-left w-full">
                    {t("selectCR")}
                  </span>
                  <label className="flex flex-col gap-[20px] lg:gap-[30px] w-full">
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] text-left">
                      {t("CRresidence")}
                    </span>
                    <Choose_region />
                  </label>
                  <span className="flex flex-col items-start gap-[18px] lg:gap-[30px] font-medium bg-[#F5F5F5] dark:bg-[#181818] pt-[15px] px-[20px] pb-[15px] rounded-[6px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px]">
                    {t("reminder")}
                    <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-normal leading-8 text-left text-[#3A3939] dark:text-[#EEEEEE]">
                      {t("reminder1")}
                    </span>
                  </span>

                  <DrawerClose asChild>
                    <Link
                      className="w-full flex justify-center lg:max-w-[631px] py-[20px] md:py-[28px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] text-[#fff] hover:bg-[#205BC9] max-w-[490px]"
                      href={"/verify"}
                      onClick={() => setIndex(!indexItem)}
                    >
                      {t("next")}
                    </Link>
                  </DrawerClose>
                </span>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] w-full min-h-[28px]">
              {propsItem}
            </Button>
          </DrawerTrigger>

          <DrawerContent className="z-[99] px-[30px] bg-white dark:bg-black max-h-[100dvh] min-h-[100dvh] pt-[2.5rem] modal-holder mobile-holder">
            <DrawerHeader className="flex flex-col gap-[16px]">
              <DrawerTitle />
              <div className="w-full border-transparent flex flex-col items-center gap-[15px]">
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <RussiaMap
                      className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[400px] border-2 border-dashed rounded-[20px]"
                      color={theme === "dark" ? "#fff" : "#000"}
                      width={250}
                    />
                  </div>
                </div>
                <h1 className="text-[32px] lg:text-[40px] leading-[32px]">
                  {t("CRresidence")}:{" "}
                  <span className="text-[#205BC9] ">
                    {user && user?.country ? user?.country : <Spinner />}
                  </span>
                </h1>
              </div>
              <DrawerDescription className="text-black dark:text-white flex gap-[5px] justify-center text-center text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px]">
                <span className="max-w-[70%]">{t("youcan")}</span>
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className="flex flex-row justify-center">
              <Button
                className="w-full max-w-[400px] lg:max-w-[450px] py-[20px] md:py-[22px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] hover:bg-[#205BC9] text-[#fff]"
                onPress={() => setIndex(!indexItem)}
              >
                {t("update")}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};
