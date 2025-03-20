"use client";
import { Page_title } from "@/components/shared/Page_title";
import Tier_initData from "@/components/shared/Tier_initData";
import Tier_table_regUsers from "@/components/shared/Tier_table_regUsers";
import { useUserStore } from "@/hooks/useUserData";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Tier = () => {
  const user = useUserStore((state) => state.user);
  const t = useTranslations("tier");
  return (
    <div className="flex flex-col gap-[40px] w-full -mt-[7.5rem] md:-mt-[0]">
      <Page_title title={t("levelsActivity")} className="!my-0" />

      {/* <article className='rounded-[30px] sm:shadow-medium dark:!shadow-none sm:dark:bg-[#181818] p-[44px_0px] md:p-[44px_26px] xl:p-[44px] w-full flex flex-col xl:flex-row items-center justify-between gap-[40px] xl:gap-[146px]'>
				<div className='flex flex-col sm:flex-row items-center gap-[31px]'>
					<Image
						width={152}
						height={152}
						alt='Level'
						src={'/main/tier/LVL.svg'}
						priority
					/>
					<div className='flex flex-col items-center sm:items-start gap-[5px]'>
						<h1 className='text-[32px] font-medium'>LVL {user?.lvl || 1}</h1>
						<span className='text-[20px] dark:text-[#BDBDBD] text-[#0c0c0c]'>
							{user?.email || 'use***@gmail.com'}
						</span>
					</div>
				</div>

				<Tier_initData />
			</article> */}

      <Tier_table_regUsers title={t("lvlDesc")} />
      <div className="flex flex-col w-full">
        <h5 className="text-[20px] font-bold">{t("getpart")}</h5>
        <p className="text-[20px] dark:text-[#EFEFEF]">{t("usersWith")}</p>
      </div>
    </div>
  );
};
export default Tier;
