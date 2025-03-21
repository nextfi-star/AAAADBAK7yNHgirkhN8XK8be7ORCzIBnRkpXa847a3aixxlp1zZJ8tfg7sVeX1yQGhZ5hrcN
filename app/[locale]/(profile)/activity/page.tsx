import { Button } from "@heroui/button";
import Activity_progressLogo from "@/components/shared/Activity_progressLogo";
import Activity_personal from "@/components/shared/Activity_personal";
import { useTranslations } from "next-intl";
import { Activity_modal } from "@/components/shared/Activity_modal";

const Activity = () => {
  const t = useTranslations("activity");
  return (
    <section className="activity flex flex-col min-h-screen overflow-x-hidden  -mt-[100px] md:m-0 xl:m-0 2xl:m-0  relative">
      <div className="site-holder flex flex-col items-center gap-[46px] relative">
        <article className="flex flex-col items-center w-full">
          <h1 className="text-[24px] text-center xl:text-[42px] font-bold mb-[20px] uppercase">
            {t("genActivity")}
          </h1>
          <div className="flex flex-col lg:flex-row items-center md:justify-between w-full">
            <p className="text-[16px] xl:text-[42px] font-bold text-center lg:text-left">
              {t("joinUs")} {t("the")}
              <span className="text-[#205BC9]"> {t("ecosystem")}</span>
            </p>
            <div className={"hidden lg:block"}>
              <Activity_modal />
            </div>
          </div>
        </article>
        <Activity_progressLogo />
        <Activity_personal />
      </div>
    </section>
  );
};

export default Activity;
