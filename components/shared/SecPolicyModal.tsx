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
              Cybersecurity Measures
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              • Data Encryption:
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              a AES-256 encryption for stored user data.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              a TLS 1.3 encryption for data transmission.
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              • Authentication & Access Contro:
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              a Mandatory two-factor authentication (2FA)
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              a Automated brute-force attack protection.
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              • Fraud Detection & Monitoring
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              a AI-driven transaction monitoring for suspicious activities.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              aspanr activity segmentation to prevent unauthorized access.
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              AML/KYC Compliance
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              • Mandatory Identity Verification:
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              o Users must submit a government-issued ID and live verification.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              o Transactions exceeding risk limits require additional
              verification.
            </span>
            <p className="text-[18px] xl:text-[24px] text-sm text-white/90">
              • International Compliance:
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              o NextFi adheres to sanction lists (OFAC, FATF, and global
              financial crime databases).
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-sempbold text-[24px] xl:text-[32px]">
              Data Protection & Storage
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • ISO 27001, SOC 2-certified data centers.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Hybrid storage model (on-premises & cloud-based for redundancy).
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • 5-year minimum data retention for regulatory compliance.
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              Incident Response & Data Breach Policy
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • 72-hour breach notification policy for affected users.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Immediate security spant & response protocol in case of a
              cyberattack.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • DDoS protection using Cloudflare & AWS Shield.
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              Government & Law Enforcement Compliance
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • NextFi may provide user data only under a valid legal request.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Cross-border cooperation with regulatory authorities in the EU,
              US, UAE, and CIS.
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              User Responsibilities
            </p>
            <p className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Users must
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Use strong passwords and enable 2FA.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Avoid sharing account details with third parties.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Report suspicious activity immediately
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Avoid sharing account details with third parties.
            </span>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Report suspicious activity immediately
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              Updates to Security & Compliance Policy
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • NextFi will notify users of security policy changes.
            </span>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-lg font-semibold text-[24px] xl:text-[32px]">
              Contact Information
            </p>
            <span className="text-[18px] xl:text-[24px] text-sm text-muted-foreground">
              • Privacy Officer Contact:{" "}
              <span className="text-[#205bc9]">technicalNextfi@gmail.com</span>
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
