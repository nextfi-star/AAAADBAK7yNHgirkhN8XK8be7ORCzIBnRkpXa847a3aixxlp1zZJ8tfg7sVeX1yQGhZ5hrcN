"use client";
import Image from "next/image";
import { Alert_email } from "./Alert_email";
import { Alert_phone } from "./Alert_phone";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { useUserStore } from "@/hooks/useUserData";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Profile_accountdetails = () => {
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
        {t("accDet")}
      </h1>
      <article className="flex items-center justify-between gap-[5px]">
        <span>{t("email")}</span>
        <span className="text-ellipsis max-w-[25px] break-all">
          {user?.email || <Spinner />}
        </span>
        <div className="min-w-[181px] flex justify-end">
          <Alert_email propsItem={t("change")} />
        </div>
      </article>

      <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />

      <article className="flex items-center justify-between gap-[5px]">
        <span>{t("phone")}</span>
        <span>{(user?.phone && `+${user?.phone}`) || ""}</span>

        <div className="min-w-[181px] flex justify-end">
          <Alert_phone propsItem={t("change")} />
        </div>
      </article>

      <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />

      <article className="flex items-center justify-between gap-[5px]">
        <span>{t("lvl")}</span>
        <span>
          {t("level1")} {user?.lvl || 1}
        </span>
        <Link href="/activity" className="min-w-[181px] flex justify-end">
          <Button className="border-1 !border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]">
            {t("viewDet")}
          </Button>
        </Link>
      </article>
    </section>
  );
};
