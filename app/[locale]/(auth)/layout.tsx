"use client";
import Image from "next/image";
import "./auth.scss";
import LayoutWithLink from "@/components/shared/LayoutWithLink";
import { useTranslations } from "next-intl";
import { Facebook, FacebookIcon, Instagram, Send, Twitter } from "lucide-react";
import { Authicons } from "@/components/shared/Authicons";
import { Spinner } from "@heroui/spinner";
import { getAuthUserData } from "@/utils/api";
import { useLayoutEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useUserStore } from "@/hooks/useUserData";

// export const metadata = {
//   title: "Auth",
//   description: "Auth page for NextFi",
// };
export interface FormLayout {
  children: React.ReactNode;
}
export default function FormLayout({ children }: FormLayout) {
  const t = useTranslations("auth");

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
          // router.push(`/${locale}/login`);
          return;
        }
        const { success, data, message } = await getAuthUserData(csrf);

        if (!success) {
          return;
        }

        setUser(data);
        router.push(`/${locale}/over`);
      } catch (e) {
        console.error(e);
        // router.push(`/${locale}/login`);
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
    <div className="form__body">
      <div className="form__main">
        <LayoutWithLink />

        <div className="form__left">
          <div className="form__img">
            <Image
              priority
              alt="Img main"
              height={400}
              quality={100}
              src={"/form/illustr.svg"}
              width={400}
            />
          </div>

          <div className="socials">
            <span>{t("joinComm")}!</span>

            <div className="socials__icons">
              {/* <Instagram
								strokeWidth={1}
								className='min-h-[38px] min-w-[38px]'
							/>
							<Facebook strokeWidth={1} className='min-h-[38px] min-w-[38px]' />
							<Twitter strokeWidth={1} className='min-h-[38px] min-w-[38px]' />
							<Send strokeWidth={1} className='min-h-[38px] min-w-[38px]' /> */}
              <Authicons />
            </div>
          </div>
        </div>

        <div className="form__right">{children}</div>
      </div>
    </div>
  );
}
