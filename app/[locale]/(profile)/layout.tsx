"use client";
import { A_Chat } from "@/components/shared/A_Chat";
import { Footer } from "@/components/shared/Footer";
import { ProfileHeader, Profile_nav, TapBar } from "@/components/shared/index";
import { useResponsiveVisibility } from "@/hooks/useResponsiveVisibility";
import { useUserStore } from "@/hooks/useUserData";
import { redirect } from "@/i18n/routing";
import { getAuthUserData } from "@/utils/api";
import { Spinner } from "@heroui/spinner";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ProfileRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showHeader, showTapbar } = useResponsiveVisibility();
  const { csrf, setUser } = useUserStore();
  const params = useParams();
  const locale = params.locale || "en";
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    const checkUserAuthValidity = async () => {
      setLoading(true);
      try {
        if (!csrf) {
          router.push(`/${locale}/login`);
          return;
        }
        const { success, data, message } = await getAuthUserData(csrf);
        console.log(success);
        console.log(message);

        if (!success) {
          router.push(`/${locale}/login`);
        }

        setUser(data);
      } catch (e) {
        router.push(`/${locale}/login`);
      } finally {
        setLoading(false);
      }
    };

    checkUserAuthValidity();
  }, [csrf]);

  if (loading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );

  return (
    // <ValidateUser>
    <div className="profile__body !pb-0 flex flex-col justify-between">
      {showHeader && <ProfileHeader auth />}
      <main className="profile__main site-holder flex-grow">
        <Profile_nav />
        <div>{children}</div>
      </main>
      <A_Chat />
      <Footer />
      {showTapbar && <TapBar />}
    </div>
    // </ValidateUser>
  );
}
