"use client";
import Image from "next/image";
import { Profile_accountdetails } from "@/components/shared/Profile_accountdetails";
import { Profile_perosnalinfo } from "@/components/shared/Profile_perosnalinfo";
import { Profile_personalverif } from "@/components/shared/Profile_personalverif";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import useAuthProtection from '@/hooks/useAuthProtection'

const Page= () => {
  useAuthProtection()
  
  return (
    <section className="personal !shadow-medium dark:!shadow-none"
    data-aos="fade-up">
      <div className="personal-container">
        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Image
              priority
              alt={"avatar"}
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
              height={152}
              src={"/main/avatar_noface.png"}
              width={152}
            />
            <ChangeAvatar />
          </div>

          <div className="flex flex-col w-full gap-[68px]">
            <Profile_perosnalinfo />
            <Profile_personalverif />
            <Profile_accountdetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
