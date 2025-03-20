"use client";
import { useUserStore } from "@/hooks/useUserData";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ProfilePage_guard } from "../ui/ProfilePage_guard";
import { ViewRegion } from "./ViewRegion";

export const Profile_personalverif = () => {
  const { theme } = useThemeStore();
  const user = useUserStore((state) => state.user);
  const t = useTranslations("profile");
  return (
    <section className="personal__content flex flex-col w-full">
      <h1 className="personal__content-title">
        <Image
          alt="picture"
          height={30}
          quality={100}
          src={"/main/profile_page/accept_icon.svg"}
          width={30}
        />
        {t("verifinfo")}
      </h1>
      <article className="flex items-center justify-between gap-[5px]">
        <span className="!hidden !sm:flex">{t("idenCert")}</span>
        <span className="flex sm:hidden">{t("identity")}</span>
        <span className="after:absolute relative after:text-white after:-bottom-[20px] after:left-[43px] ">
          <ProfilePage_guard color={theme === "dark" ? "#fff" : "#000"} />
          {t("addinfo")}
        </span>

        <div className="min-w-[181px] flex justify-end">
          <Link href={"/verify"}>
            <Button className="border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]">
              {t("viewDet")}
            </Button>
          </Link>
        </div>
      </article>

      <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />

      <article className="flex items-center justify-between gap-[5px]">
        <span>{t("country/region")}</span>
        <span>{user?.country || <Spinner />}</span>

        <div className="min-w-[181px] flex justify-end">
          <ViewRegion propsItem={"Change"} />
        </div>
      </article>
    </section>
  );
};
