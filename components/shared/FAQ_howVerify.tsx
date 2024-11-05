import { NextPage } from "next";

import { CloseBtn } from "../ui/CloseBtn";
import ArrowBracket from "../ui/ArrowBracket";

import { useThemeStore } from "@/store";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  setShowFaq: (showFaq: boolean) => void;
  showFaq: boolean;
}
export const FAQ_howVerify: NextPage<Props> = ({ setShowFaq, showFaq }) => {
  const { theme } = useThemeStore();

  return (
    <div className="fixed inset-x-0 bottom-0 top-[97px] dark:bg-[#0C0C0C] bg-white overflow-y-auto">
      <div className="sm:!pt-[40px] sm:!pb-[40px] !pb-[80px] site-holder gap-[15px] flex items-start justify-between">
        <div className=" flex flex-col gap-[48px] max-w-[1100px]">
          <article className="flex items-center gap-[10px] flex-wrap">
            <button onClick={() => setShowFaq(!showFaq)}>
              <CloseBtn />
            </button>
            <span className="text-[14px] sm:text-[18px] flex items-center gap-[5px]">
              FAQ
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>
            <span className="text-[14px] sm:text-[18px] flex items-center gap-[5px]">
              Account, security, and verification
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>
            <span className="text-[14px] sm:text-[18px] flex items-center gap-[5px]">
              Individual verification
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>
            <span className="text-[14px] sm:text-[18px] flex items-center gap-[5px]">
              Article
              <ArrowBracket
                className={"-rotate-90"}
                color={theme === "dark" ? "white" : "black"}
                height={25}
                width={25}
              />
            </span>
          </article>
          <div className="flex flex-col gap-[60px]">
            <article className="flex flex-col gap-[24px]">
              <h1 className="text-[20px] sm:text-[25] md:text-[42px] font-bold">
                How do I verify an individual account?
              </h1>
              <span className="flex items-center gap-[2px] flex-wrap text-[14px] sm:text-[18px] text-[#BDBDBD]">
                <span>Published on Sep 25, 2023</span>
                <span className="px-[8px]">|</span>
                <span>Updated on Sep 26, 2024</span>
                <span className="px-[8px]">|</span>
                <span>3 min read</span>
                <span className="px-[8px]">|</span>
                <span> {"{ICON}"} 1234</span>
              </span>
            </article>
            <article className="flex flex-col gap-[24px]">
              <p className="text-[14px] sm:text-[20px] ">
                To use your individual account, you need to complete advanced
                identity verification to meet Know Your Customer (KYC)
                requirements. We require this to keep your account and assets
                secure.
              </p>
              <p className="text-[14px] sm:text-[20px] ">
                The verification process ensures our exchange is safe and
                prevents fraud alongside other illegal activities. You can
                trade, deposit and make withdrawals after completing your
                identity verification.
              </p>
            </article>
            <article className="flex flex-col gap-[24px]">
              <h1 className="text-[14px] sm:text-[24px] font-medium">
                Getting started on the web
              </h1>
              <p className="text-[14px] sm:text-[20px]">
                Log in to your account at{" "}
                <span className="text-[#205BC9]">NextFi.com </span>and go to the{" "}
                <span className="text-[#205BC9]">confirmation page.</span> You
                can find it under the profile icon{" "}
                <strong> {"> "}Verification.</strong> On this page, find{" "}
                <strong>Individual account</strong> and select{" "}
                <strong>Continue</strong>
              </p>
              <div className="w-full min-h-[164px] bg-[#515151] rounded-[30px] flex items-center justify-center">
                <span className="text-[14px] sm:text-[24px]">Image</span>
              </div>
            </article>
          </div>
        </div>
        <div className="hidden lg:block sticky top-[50px] rotate-x-[-90deg]">
          <ScrollArea className="h-[404px] w-[350px] rounded-md border p-4 flex flex-col !gap-[60px]">
            <a className="block my-[20px] text-[20px]" href="#">
              Getting start on the web
            </a>
            <a className="block my-[20px] text-[20px]" href="#">
              Getting started on the app
            </a>
            <a className="block my-[20px] text-[20px]" href="#">
              Identity verification
            </a>
            <a
              className="my-[20px] text-[20px] flex flex-col gap-[15px]"
              href="#"
            >
              FAQ
              <ul className="flex flex-col gap-[10px] pl-[24px]">
                <li className="text-[18px] text-[#BDBDBD]">
                  1. Why do I need to verify again?
                </li>
                <li className="text-[18px] text-[#BDBDBD]">
                  2. Why did my identity verification get rejected?
                </li>
                <li className="text-[18px] text-[#BDBDBD]">
                  3. Do I need to submit a new form of identification?
                </li>
              </ul>
            </a>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
