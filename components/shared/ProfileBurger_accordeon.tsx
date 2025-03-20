import { Link } from "@/i18n/routing";
import { Button } from "@heroui/button";
import { Alert_auntef } from "./Alert_auntef";
import { Alert_email } from "./Alert_email";
import { Alert_logpass } from "./Alert_logpass";
import { Alert_nickname } from "./Alert_nickname";
import { Alert_phone } from "./Alert_phone";
import { ChangeRegion } from "./ChangeRegion";
import { CloseAccount } from "./CloseAccount";
import { FreezeAccount } from "./FreezeAccount";
import { ProfileBurger_devices__accor } from "./ProfileBurger_devices__accor";
import { ProfileBurger_verification_accor } from "./ProfileBurger_verification_accor";
import { ProfileBurger_profile_accor } from "./ProfileBurger_profile_accor";
import { ProfileBurger_security_accor } from "./ProfileBurger_security_accor";
import { ViewRegion } from "./ViewRegion";
import { useMemo } from "react";
import { useUserStore } from "@/hooks/useUserData";
import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";

interface Props {
  showSection: boolean;
  activeTab: string;
}

export const ProfileBurger_accordeon = ({ showSection, activeTab }: Props) => {
  const user = useUserStore((state) => state.user);
  const t = useTranslations("burger");
  const profileData = useMemo(() => {
    return [
      {
        title: t("personalinfo"),
        icon: "/header_icons/profile_burger/accord_info.svg",
        items: [
          {
            value: "item-1",
            trigger: t("nickname"),
            content: (
              <>
                <span>{user?.username || "User"}</span>
                <Alert_nickname
                  propsItem={t("change")}
                  className="max-w-[100px]"
                />
              </>
            ),
          },
          {
            value: "item-2",
            trigger: t("userid"),
            content: "354654654",
          },
        ],
      },
      {
        title: t("verifInfo"),
        icon: "/header_icons/profile_burger/verifciation.svg",
        items: [
          {
            value: "item-1",
            trigger: t("idenCert"),
            content: (
              <>
                <span>Identity</span>
                <ChangeRegion
                  propsItem={t("change")}
                  className="max-w-[100px]"
                />
              </>
            ),
          },
          {
            value: "item-2",
            trigger: t("country"),
            content: (
              <>
                {user?.country || "World"}
                <ViewRegion propsItem={t("change")} />
              </>
            ),
          },
        ],
      },
      {
        title: t("accDetails"),
        icon: "/header_icons/profile_burger/settings_burger.svg",
        items: [
          {
            value: "item-1",
            trigger: t("email"),
            content: (
              <>
                <span>{user?.email || "Email"}</span>
                <Alert_email propsItem={t("change")} />
              </>
            ),
          },
          {
            value: "item-2",
            trigger: t("phone"),
            content: (
              <>
                <span />
                {/* <span>{user?.phone || '+*********'}</span> */}
                <div>
                  <Alert_phone propsItem={t("change")} />
                </div>
              </>
            ),
          },
          {
            value: "item-3",
            trigger: t("levels"),
            content: `${user?.level || "1"} lvl`,
          },
        ],
        no_line: "",
      },
    ];
  }, []);
  const securityData = useMemo(() => {
    return [
      {
        title: t("authMethods"),
        items: [
          {
            value: "item-1",
            trigger: t("authApp"),
            icon: "/main/profile_security/auth_app.svg",
            content: (
              <>
                <span>{t("authDesc")}</span>
                <Alert_auntef propsItem={t("change")} />
              </>
            ),
          },
          {
            icon: "/main/profile_security/phone.svg",
            value: "item-2",
            trigger: t("phoneAuth"),
            content: (
              <>
                <span>{t("changephone")}</span>
                <Alert_phone propsItem={t("change")} />
              </>
            ),
          },
          {
            icon: "/main/profile_security/email.svg",
            value: "item-3",
            trigger: t("emailAuth"),
            content: (
              <>
                <span>{t("changeemail")}</span>
                <Alert_email propsItem={t("change")} />
              </>
            ),
          },
          {
            icon: "/main/profile_security/login_pass.svg",
            value: "item-4",
            trigger: t("logPass"),
            content: (
              <>
                <span>{t("changepass")}</span>
                <Alert_logpass propsItem={t("change")} />
              </>
            ),
          },
        ],
      },
      {
        title: t("accManage"),
        items: [
          // {
          //   value: "item-1",
          //   trigger: t("freeze"),
          //   icon: "/main/profile_security/account_freeze.svg",
          //   content: (
          //     <>
          //       <span>{t("freezeAcc")}</span>
          //       <FreezeAccount propsItem={t("freeze")} />
          //     </>
          //   ),
          // },
          {
            icon: "/main/profile_security/account_close.svg",
            value: "item-2",
            trigger: t("closeAcc"),
            content: (
              <>
                <span>{t("closeAcc")}</span>
                <CloseAccount propsItem={t("close")} />
              </>
            ),
          },
        ],
      },
    ];
  }, []);
  const verifData = useMemo(() => {
    return [
      {
        items: [
          {
            value: "item-1",
            trigger: t("verification"),
            icon: "/main/profile_security/auth_app.svg",
            content: (
              <>
                <span>{t("notverif")}</span>
                <Link href="/verify">
                  <Button className="text-[14px] sm:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9]">
                    {t("verifNow")}
                  </Button>
                </Link>
              </>
            ),
          },
        ],
      },
    ];
  }, []);
  return (
    <div
      className={`accor__wrapper  overscroll-contain h-max ${!showSection ? "scrollY" : ""} `}
    >
      {activeTab === "Profile" && (
        <ProfileBurger_profile_accor data={profileData} />
      )}
      {activeTab === "Security" && (
        <ProfileBurger_security_accor data={securityData} />
      )}
      {activeTab === "Verification" && (
        <ProfileBurger_verification_accor data={verifData} />
      )}
      {activeTab === "Devices" && <ProfileBurger_devices__accor />}
    </div>
  );
};
