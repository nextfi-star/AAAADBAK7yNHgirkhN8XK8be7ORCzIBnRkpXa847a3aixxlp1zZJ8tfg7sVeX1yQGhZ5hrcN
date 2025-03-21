import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ArrowBracket from "../ui/ArrowBracket";

export function PolicyModal() {
  const t = useTranslations("privacy");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-0 text-[18px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] text-black hover:cursor-pointer shadow-none">
          {t("privacyPolicy")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[1200px] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[1px] sm:!top-[176px] md:!top-[176px]">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]">
            <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]">
              <AlertDialogCancel className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0">
                <ArrowBracket
                  className={"rotate-90"}
                  color={"currentColor"}
                  height={25}
                  width={25}
                />
              </AlertDialogCancel>
            </span>{" "}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogHeader className="flex flex-col items-center gap-[10px] py-4">
          <AlertDialogTitle className="text-[24px] xl:text-[32px]">
            {t("privacyPolicy")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("introduction")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("companyInfo")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("purposePolicy")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("information_collect")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("personal_indentify_data")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("personal_user_data")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("personal_video")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lp font-semibold text-[24px] xl:text-[32px]">
              {t("financal_data")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("crypto_transaction")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("technical_data")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("device_data")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_data_1")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("marketing_tracking_data_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("marketing_tracking_data_description")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("how_we_use_data_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("how_we_use_data_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("how_we_use_data_2")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("how_we_use_data_3")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("how_we_use_data_4")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("legal_basis_for_data_processing_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("legal_basis_for_data_processing_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("legal_basis_for_data_processing_2")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("legal_basis_for_data_processing_3")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("legal_basis_for_data_processing_4")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("cookies_tracking_technologies_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("cookies_tracking_technologies_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("cookies_tracking_technologies_2")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("data_sharing_with_third_parties_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_sharing_with_third_parties_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_sharing_with_third_parties_2")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("user_rights_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_rights_intro")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_rights_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_rights_2")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_rights_3")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("data_security_measures_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_security_measures_intro")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_security_measures_1")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_security_measures_2")}
            </span>
            <span>{t("data_security_measures_3")}</span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("international_data_transfers_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("international_data_transfers_1")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("changes_to_privacy_policy_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("changes_to_privacy_policy_1")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem] pb-[2.5rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("contact_information_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("contact_information_1")}{" "}
              <span className="text-[#205bc9]">
                {t("contact_information_email")}
              </span>
            </span>
          </div>

          <div className="w-full flex justify-center">
            <AlertDialogCancel
              asChild
              className="text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0 my-[3.5rem] w-full"
            >
              <Button className="p-0 text-[20px] outline outline-1 rounded-[40px] px-[1.5rem] outline-white bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none max-w-[150px] !my-[2.5rem]">
                {t("close")}
              </Button>
            </AlertDialogCancel>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
