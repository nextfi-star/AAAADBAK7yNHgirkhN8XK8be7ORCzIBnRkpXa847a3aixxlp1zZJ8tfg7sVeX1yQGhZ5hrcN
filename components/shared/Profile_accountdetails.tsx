import { NextPage } from "next";
import Image from "next/image";
import { Alert_email } from "./Alert_email";
import { Alert_phone } from "./Alert_phone";
import { useThemeStore } from "@/store";
import { Button } from '@nextui-org/button'

export const Profile_accountdetails: NextPage = () => {
  const { theme } = useThemeStore();

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
        Account details
      </h1>
      <article className="flex items-center justify-between gap-[5px]">
        <span>Email</span>
        <span>user****@main.ru</span>

        <div className="min-w-[181px] flex justify-end">
          <Alert_email propsItem={"Change"} />
        </div>
      </article>

      <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />

      <article className="flex items-center justify-between gap-[5px]">
        <span>Phone</span>
        <span>****140</span>

        <div className="min-w-[181px] flex justify-end">
          <Alert_phone propsItem={"Change"} />
        </div>
      </article>

      <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />

      <article className="flex items-center justify-between gap-[5px]">
        <span>Levels Activity</span>
        <span>Level 1</span>
        <div className="min-w-[181px] flex justify-end">
          <Button className="border-1 !border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]">
            View Details
          </Button>
        </div>
      </article>
    </section>
  );
};
