import { NextPage } from "next";
import Image from "next/image";
import { Button } from "../ui/button";
import ArrowBracket from "../ui/ArrowBracket";
import { Alert } from "./Alert";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store";

interface Props {
  propsItem: React.ReactNode;
}

export const FreezeAccount: NextPage<Props> = ({ propsItem }) => {
  const { theme } = useThemeStore();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] border-gray-400 text-[#205bc9] dark:text-white`}
        >
          {propsItem}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="pt-[.5rem] min-h-[100dvh] mdoal-holder modal-holder mobile-holder ">
        <div className="max-h-[99%] overflow-y-auto">
          <DrawerTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]">
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
                href="/security"
              >
                Security
              </Link>
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>{" "}
            Freeze account
          </DrawerTitle>
          <div className="flex flex-col items-center gap-[20px] pb-[5rem]">
            <DrawerDescription className="text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex flex-col items-center gap-[10px] justify-center w-full max-w-[921px]">
              <span className="flex flex-col items-center gap-[5px] md:flex-row md:items-center justify-center md:gap-[10px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] w-full text-center">
                <Image
                  alt="info"
                  className="max-w-[20px] md:max-w-[22px] 2xl:max-w-[30px] w-full"
                  height={20}
                  quality={100}
                  src={"/header_icons/profile_burger/info_icon.svg"}
                  width={20}
                />
                After freezing your account:
              </span>
              <span className="flex flex-col gap-[10px] items-start text-[14px] md:text-[16px] lg:text-[17px] text-left leading-[16px] xl:leading-[18px] 2xl:leading-[20px]">
                <li>
                  • Your account Username@gmail.com will be frozen temporarily.
                  To unfreeze it, start by logging in again.{" "}
                </li>

                <li>
                  • Your account Username@gmail.com will be frozen temporarily.
                  To unfreeze it, start by logging in again.{" "}
                </li>

                <li>
                  • All trading capabilities of this account will be disabled
                </li>

                <li>• All API keys for this account will be deleted </li>

                <li>• All approved devices for this account will be removed</li>

                <li>
                  • Ongoing transactions such as perpetuals will not be canceled
                  automatically
                </li>
              </span>
            </DrawerDescription>
            <div className="flex w-full max-w-[921px] flex-col items-start gap-[10px] md:gap-[20px] border border-solid border-gray-400 py-[10px] rounded-[4px]">
              <h5 className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] border-0 border-b border-solid border-b-gray-400 w-full text-center py-[10px] px-[5px]">
                Why do you want to freeze your account?
              </h5>
              <div className="px-[16px]">
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <label className="flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full">
                      <RadioGroupItem
                        className="border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] "
                        id="option-one"
                        value="option-one"
                      />
                      This account is not safe, so I want to freeze it
                      temporarily.
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full">
                      <RadioGroupItem
                        className="border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]"
                        id="option-two"
                        value="option-two"
                      />
                      I don't want to use this account anymore.
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full">
                      <RadioGroupItem
                        className="border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]"
                        id="option-three"
                        value="option-three"
                      />
                      I want to use another cryptocurrency platform.
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full">
                      <RadioGroupItem
                        className="border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]"
                        id="option-four"
                        value="option-four"
                      />
                      Other reasons
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="privacy max-w-[921px] flex flex-col self-center	 justify-start">
              <label
                className="checkbox-label gap-[5px] md:gap-[18px] !items-start"
                htmlFor="checkbox-privacy"
              >
                <input
                  className="checkbox"
                  id="checkbox-privacy"
                  type="checkbox"
                />
                <span className="checkbox-view">
                  <svg
                    className="checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]"
                    viewBox="0 0 511.985 511.985"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                      fill={theme === "dark" ? "#fff" : "#3A3939"}
                    />
                  </svg>
                </span>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left">
                  To protect your account, you will not be able to withdraw
                  funds within 24 hours after resetting your settings or
                  changing your account password.
                </p>
              </label>
            </div>
            <DrawerFooter className="flex flex-row justify-center gap-[40px] pb-[3rem]">
              <DrawerClose asChild>
                <Button className="dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid dark:border-white border-black rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:!px-[40px] 2xl:!px-[70px] font-medium h-fit w-[98px] hover:bg-transparent">
                  Close
                </Button>
              </DrawerClose>
              <Alert
                className={"z"}
                content={
                  "This action cannot be undone. Your account will be freezed."
                }
                title={"Are you absolutely sure?"}
                titleTriger={"Confirm"}
              />
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
