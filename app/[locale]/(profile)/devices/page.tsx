"use client";
import Image from "next/image";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import { Profile_devices } from "@/components/shared/Profile_devices";

const Devices = () => {
  return (
    <section className="personal !shadow-medium dark:!shadow-none"  data-aos="fade-up"> 
      <div className="personal-container">
        <h1 className="text-[32px] font-bold w-full text-center lg:text-left">
          Authorized Devices
        </h1>
        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Image
              alt={"avatar"}
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
              height={152}
              src={"/main/avatar_noface.png"}
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
