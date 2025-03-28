"use client";
import { Accordion, AccordionItem } from "@/components/ui/AccordionBurger";
import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Device } from "../ui/Device";
import { Logout_confirmation } from "./Logout_confirmation";
import { Spinner } from "@heroui/spinner";

export const Profile_devices = () => {
  const t = useTranslations("device");
  const { theme } = useThemeStore();
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const locale = useParams()?.locale || "en";
  const csrf = user?.csrf || "";

  useEffect(() => {
    if (csrf) {
      const fetchSessions = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            "https://nextfi.io:5000/api/v1/devices",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ csrf: csrf }),
            }
          );
          const result = await response.json();

          if (response.ok) {
            setSessions(
              result.data.slice(result.data.length - 3, result.data.length) ||
                []
            );
          } else {
            setError(result.message || "Failed to fetch sessions");
          }
        } catch (err: any) {
          setError(err.message || "An error occurred while fetching sessions");
        } finally {
          setLoading(false);
        }
      };

      fetchSessions();
    }
  }, [csrf]);
  if (error) return <div>Error: {error}</div>;
  const handleLogout = async (fullLogout = false) => {
    try {
      const payload = {
        csrf: user?.csrf,
        full: fullLogout ? "true" : "",
      };
      const response = await fetch("https://nextfi.io:5000/api/v1/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Logout failed");
      }
      if (response.ok) {
        sessionStorage.removeItem("userData");
        router.push(`/${locale}/login?error=sessionExpired`);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-[20px] h-full">
      <Accordion collapsible className="" type="single">
        <div className="w-full">
          <AccordionItem className="flex flex-col gap-[30px]" value={"item-1"}>
            <div className="hover:no-underline py-[0] items-start svg-hidden">
              <div className="flex flex-col w-full gap-[5px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center -ml-[3px]">
                    <Image
                      alt="icon"
                      height={50}
                      src={"/header_icons/profile_burger/device_phone.svg"}
                      width={50}
                    />
                    <h5 className="text-[32px] font-medium">{t("devices")}</h5>
                  </div>
                </div>

                {loading ? (
                  <Spinner />
                ) : (
                  sessions.map((session) => (
                    <div className="flex items-start flex-col gap-[25px] pb-[20px]">
                      <div
                        className="flex w-full gap-[15px] justify-between items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-[20px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black   after:text-[16px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-17px] after:left-[50%] after:translate-x-[-50%]">
                          {session.os} | {session.browser} | {session.country}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </AccordionItem>
          <span className="block w-full min-h-[1px] bg-gray-500 dark:bg-white my-[10px]" />
        </div>
        <div className="w-full flex flex-col items-center mt-[4rem] pb-[1.5rem] overflow-hidden">
          <Device
            className={"min-w-[970px] object-cover"}
            color={theme === "dark" ? "white" : "black"}
            width={"835"}
          />
          <Logout_confirmation
            unDone={
              "This action cannot be undeone. You will be logged out from this device, but your account and data will remain intact on servers"
            }
            className={
              "text-[20px] bg-[#205BC9] rounded-[50px] px-[25px] py-[5px] text-white !w-fit hover:bg-[#205BC9]"
            }
            titleTriger={t("logOutAll")}
            sure={"Are you absolutelu sure"}
          />
          {/* <Button
						className='text-[20px] bg-[#205BC9] rounded-[50px] px-[25px] py-[5px] text-white'
						onPress={() => handleLogout(true)}
					>
						{t('logOutAll')}
					</Button> */}
        </div>
      </Accordion>
    </div>
  );
};
