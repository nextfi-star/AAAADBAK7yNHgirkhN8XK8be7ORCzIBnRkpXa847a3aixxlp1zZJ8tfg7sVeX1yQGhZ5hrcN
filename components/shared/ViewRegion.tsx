"use client";
import { NextPage } from "next";
import { useState } from "react";
import { RussiaMap } from "../ui/RussiaMap";
import ArrowBracket from "../ui/ArrowBracket";
import { Choose_region } from "./Choose_region";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useThemeStore } from "@/store";
import { Link } from "@/i18n/routing";
import { Button } from '@nextui-org/button'

interface Props {
  propsItem: React.ReactNode;
}

export const ViewRegion: NextPage<Props> = ({ propsItem }) => {
  const { theme } = useThemeStore();
  const [indexItem, setIndex] = useState(false);

  return (
    <>
      {indexItem ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className="border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]"
            >
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
                    Verify
                  </Link>
                  <ArrowBracket
                    className={"-rotate-90"}
                    color={theme === "dark" ? "white" : "black"}
                    height={25}
                    width={25}
                  />
                </span>
                Country/Region
              </DrawerTitle>

              <DrawerDescription className="text-black dark:text-white flex gap-[30px] lg:gap-[40px] flex-col items-center w-full b-[6rem] 2xl:pb-0">
                <span className="flex flex-col gap-[20px] items-center max-w-[623px] pb-[1rem]">
                  <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] text-left w-full">
                    Select country/region of residence
                  </span>
                  <label className="flex flex-col gap-[20px] lg:gap-[30px] w-full">
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] text-left">
                      Country/Region of residence
                    </span>
                    <Choose_region />
                  </label>
                  <span className="flex flex-col items-start gap-[18px] lg:gap-[30px] font-medium bg-[#F5F5F5] dark:bg-[#181818] pt-[15px] px-[20px] pb-[15px] rounded-[6px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px]">
                    Reminder
                    <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-normal leading-8 text-left text-[#3A3939] dark:text-[#EEEEEE]">
                      Once your country/region is changed, some of your tag/memo
                      addresses and asset holdings may become unsupported. Check
                      if your deposit address is still valid, and consider
                      trading your assets before proceeding as withdrawals may
                      incur high fees.
                    </span>
                  </span>

                  <DrawerClose asChild>
                    <Button
                      className="w-full lg:max-w-[631px] py-[20px] md:py-[28px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] text-[#fff] hover:bg-[#205BC9] max-w-[490px]"
                      onClick={() => setIndex(!indexItem)}
                    >
                      Next
                    </Button>
                  </DrawerClose>
                </span>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]">
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
                  Country/Region of residence:{" "}
                  <span className="text-[#205BC9] ">Russia</span>
                </h1>
              </div>
              <DrawerDescription className="text-black dark:text-white flex gap-[5px] justify-center text-center text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px]">
                <span className="max-w-[70%]">
                  You can only update your country/region of residence once
                  every 90 days. Updating it also means you'll need to complete
                  your identity verification again.
                </span>
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className="flex flex-row justify-center">
              <Button
                className="w-full max-w-[400px] lg:max-w-[450px] py-[20px] md:py-[22px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] hover:bg-[#205BC9] text-[#fff]"
                onClick={() => setIndex(!indexItem)}
              >
                Update
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};
