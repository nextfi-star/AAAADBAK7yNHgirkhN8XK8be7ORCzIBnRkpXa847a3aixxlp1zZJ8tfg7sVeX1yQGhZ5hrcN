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

export function SecPolicyModal() {
  const t = useTranslations("security");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-0 text-[18px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] text-black hover:cursor-pointer shadow-none">
          {t("securityPolicy")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[1200px] bg-white dark:bg-[#111] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[1px] sm:!top-[176px] md:!top-[176px]">
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
            {t("securityPolicy")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("introduction")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("nextfiCommitted")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]">
              {t("weComply")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("title")}
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              {t("data_encryption")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_encryption_aes")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_encryption_tls")}
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              {t("auth_access_control")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("auth_2fa")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("auth_brute_force")}
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              {t("fraud_detection")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("fraud_ai_monitoring")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("fraud_activity_segmentation")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("aml_kyc_title")}
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              {t("aml_identity_verification")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("aml_identity_id")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("aml_transaction_verification")}
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              {t("aml_international_compliance")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("aml_sanctions_adherence")}
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("data_protection_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_iso_certification")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_hybrid_storage")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("data_retention_policy")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("incident_response_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("incident_breach_notification")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("incident_security_response")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("incident_ddos_protection")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("gov_compliance_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("gov_legal_request")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("gov_cross_border_cooperation")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("user_responsibilities_title")}
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_must")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_strong_passwords")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_no_sharing")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_report_suspicious")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_no_sharing")}
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("user_report_suspicious")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("updates_policy_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("updates_policy_notification")}
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              {t("contact_info_title")}
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              {t("contact_privacy_officer")}{" "}
              <span className="text-[#205bc9]">{t("contact_email")}</span>
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
