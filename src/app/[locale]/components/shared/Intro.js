import Image from "next/image";
import React from "react";
import { Intro__wave } from "../ui/Intro__wave";
import { Glow } from "../ui/Glow";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/routing";

export const Intro = () => {
  const t = useTranslations("intro");

  return (
    <section className="main__intro">
      <Intro__wave />
      <div className="site-holder">
        <div className="main__intro-content">
          <div className="main__intro-column">
            <h1 data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
              Explore new opportunities in financial&nbsp;investing <b>with NextFi token</b>
            </h1>
            {/* mobile v. */}
            <div className="m-main__img-wrapper">
              <Image width={768} height={650} src="/main/Illustration.svg" alt="" className="main-img" quality={100} />
            </div>
            <span data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
              {t("Modern")}
            </span>
            <div className="main__buttons" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
              <Link href="/signup" className="btn btn-blue">
                {t("SignUp")}
              </Link>
              <Link href="/login" className="btn btn-transparent">
                {t("LogIn")}
              </Link>
            </div>
          </div>

          <div className="main__intro-wrapper">
            <Image
              width={696}
              height={469}
              src="/main/Illustration.svg"
              alt=""
              className="main-img"
              priority
              quality={100}
            />
            <Glow />
          </div>
        </div>
        <div className="main__intro-values" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">{t("$65B")}</span>
            <span className="main__intro-values-item__name">{t("Investment")}</span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">{t("$350M")}</span>
            <span className="main__intro-values-item__name">{t("Payout")}</span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+750</span>
            <span className="main__intro-values-item__name">{t("AllUsers")}</span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">{t("+230")}</span>
            <span className="main__intro-values-item__name">{t("Bonus")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
