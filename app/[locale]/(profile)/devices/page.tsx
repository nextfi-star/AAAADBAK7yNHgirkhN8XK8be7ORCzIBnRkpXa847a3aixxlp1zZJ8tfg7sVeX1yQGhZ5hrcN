"use client";
import Image from "next/image";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import { Profile_devices } from "@/components/shared/Profile_devices";
import { useTranslations } from "next-intl";
import { Avatar } from "@/components/shared/Avatar";

const Devices = () => {
  const t = useTranslations("device");

  return (
    <section className="personal !shadow-medium dark:!shadow-none">
      <div className="personal-container">
        <h1 className="text-[32px] font-bold w-full text-center lg:text-left">
          {t("authDev")}
        </h1>
        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Avatar
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
              height={152}
              width={152}
            />
            <ChangeAvatar />
          </div>

          <div className="flex flex-col w-full gap-[68px]">
            <Profile_devices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
