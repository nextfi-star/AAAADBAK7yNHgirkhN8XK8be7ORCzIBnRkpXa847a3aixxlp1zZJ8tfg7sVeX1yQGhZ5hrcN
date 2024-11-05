import Image from "next/image";
import React from "react";

import ArrowBracket from "../ui/ArrowBracket";

import { useThemeStore } from "@/store";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/i18n/routing";

export const Platform_mode = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <Tabs className="hidden sm:inline-flex" defaultValue="account">
        <TabsList className="grid-cols-3">
          <TabsTrigger
            className="text-[14px] !text-black dark:!text-white !bg-white dark:!bg-black shadow"
            value="Platform"
          >
            <Link href="/over">Platform</Link>
          </TabsTrigger>

          <TabsTrigger
            className="lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            value="Exchange"
          >
            Exchange
            <Image
              alt="lock icon"
              className="pl-[5px] lock"
              height={20}
              src={"/lock.svg"}
              width={20}
            />
          </TabsTrigger>
          <TabsTrigger
            className="lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            value="Web"
          >
            Web 3
            <Image
              alt="lock icon"
              className="pl-[5px] lock"
              height={20}
              src={"/lock.svg"}
              width={20}
            />
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs className="sm:hidden" defaultValue="account">
        <TabsList className="grid-cols-3 items-center">
          <TabsTrigger
            className="text-[14px] !text-black dark:!text-white !bg-white dark:!bg-black shadow px-[3px]"
            value="Platform"
          >
            <Link href="/over">Platform</Link>
          </TabsTrigger>
          <TabsTrigger
            className="lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-[3px]"
            value="Exchange"
          >
            <Image
              alt="lock icon"
              className="pl-[5px] lock"
              height={20}
              src={"/lock.svg"}
              width={20}
            />
            <ArrowBracket
              className={"-rotate-[90deg]"}
              color={theme === "dark" ? "white" : "black"}
              height={20}
              width={20}
            />
          </TabsTrigger>
          <TabsTrigger
            className="lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-[3px]"
            value="Web"
          >
            <Image
              alt="lock icon"
              className="pl-[5px] lock"
              height={20}
              src={"/lock.svg"}
              width={20}
            />
            <ArrowBracket
              className={"-rotate-[90deg]"}
              color={theme === "dark" ? "white" : "black"}
              height={20}
              width={20}
            />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};
