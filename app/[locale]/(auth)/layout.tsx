import Image from "next/image";
import "./auth.scss";
import LayoutWithLink from "@/components/shared/LayoutWithLink";
import { useTranslations } from 'next-intl'


export const metadata = {
  title: "Auth",
  description: "Auth page for NextFi",
};
export interface FormLayout {
  children: React.ReactNode;
}
export default function FormLayout({ children }: FormLayout) {
  const t = useTranslations('auth')
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
            <span>{t('joinComm')}!</span>

            <div className="socials__icons">
              <Image
                alt="Logo"
                height={48}
                quality={100}
                src={"/form/icons_leftside/Instagram_white.svg"}
                width={48}
              />
              <Image
                alt="Logo"
                height={48}
                quality={100}
                src={"/form/icons_leftside/Telegram_white.svg"}
                width={48}
              />
              <Image
                alt="Logo"
                height={48}
                quality={100}
                src={"/form/icons_leftside/Snapchat_white.svg"}
                width={48}
              />
              <Image
                alt="Logo"
                height={48}
                quality={100}
                src={"/form/icons_leftside/Twitter_white.svg"}
                width={48}
              />
            </div>
          </div>
        </div>

        <div className="form__right">{children}</div>
      </div>
    </div>
  );
}
