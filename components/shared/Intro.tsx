import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/react";
import { Intro__wave } from "../ui/Intro__wave";
import { Glow } from "../ui/Glow";
import { Link } from "../../i18n/routing";

export const Intro = () => {
  const t = useTranslations("landing");

  return (
    <section className="main__intro" id="main__intro">
      <Intro__wave />
      <div className="site-holder">
        <div className="main__intro-content">
          <div className="main__intro-column">
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              {t("heroTitle")} <b>{t("withAI")}</b>
            </h1>
            {/* mobile v. */}
            <div className="m-main__img-wrapper z-[9]">
              <Image
                alt=""
                className="main-img"
                height={650}
                quality={100}
                src="/main/Illustration.svg"
                width={768}
              />
            </div>
            <span
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              {t("heroTitleUnder")}
            </span>
            <div
              className="main__buttons w-full"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Link href="/signup" className="w-full">
                <Button className="btn btn-blue w-full">{t("signup")}</Button>
              </Link>
              <Link href="/login" className="w-full">
                <Button className="btn btn-transparent w-full">
                  {t("login")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="main__intro-wrapper">
            <Image
              priority
              alt=""
              className="main-img"
              height={469}
              quality={100}
              src="/main/Illustration.svg"
              width={696}
            />
            <Glow />
          </div>
        </div>
        <div
          className="main__intro-values"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+ 10 M</span>
            <span className="main__intro-values-item__name">
              {t("heroInvestmentVol")}
            </span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+ $8.5 M</span>
            <span className="main__intro-values-item__name">
              {" "}
              {t("activeDepos")}
            </span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+100</span>
            <span className="main__intro-values-item__name">{t("users")}</span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+100K</span>
            <span className="main__intro-values-item__name">{t("bonus")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
