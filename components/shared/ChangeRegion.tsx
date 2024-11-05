import { NextPage } from "next";
import { useState } from "react";

import { Button } from "../ui/button";
import { RussiaMap } from "../ui/RussiaMap";

import { useThemeStore } from "@/store";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

interface Props {
  propsItem: React.ReactNode;
}

export const ChangeRegion: NextPage<Props> = ({ propsItem }) => {
  const [indexItem, setIndex] = useState(false);
  const { theme } = useThemeStore();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400">
          {propsItem}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="z-[90] px-[30px] bg-white dark:bg-black max-h-[100dvh] min-h-[100dvh] pt-[2.5rem] modal-holder mobile-holder">
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
              You can only update your country/region of residence once every 90
              days. Updating it also means you'll need to complete your identity
              verification again.
            </span>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="flex flex-row justify-center">
          <DrawerClose asChild>
            <Button
              className="w-full max-w-[400px] lg:max-w-[450px] py-[20px] md:py-[22px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] hover:bg-[#205BC9] text-[#fff]"
              onClick={() => setIndex(!indexItem)}
            >
              Update
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
