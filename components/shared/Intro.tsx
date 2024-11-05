import Image from "next/image";
import { useTranslations } from "next-intl";
import { NextPage } from "next";
import { Button } from "@nextui-org/react";

import { Intro__wave } from "../ui/Intro__wave";
import { Glow } from "../ui/Glow";
import { Link } from "../../i18n/routing";

export const Intro: NextPage = () => {
  const t = useTranslations("intro");

  return (
    <section className="main__intro">
      <Intro__wave />
      <div className="site-holder">
        <div className="main__intro-content">
          <div className="main__intro-column">
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Explore new opportunities in financial&nbsp;investing{" "}
              <b>with NextFi token</b>
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
              Modern AI solutions provide reliable tokenomics, sustained growth
              in investments, and ensure the safety of your funds.
            </span>
            <div
              className="main__buttons"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Button className="btn btn-blue">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button className="btn btn-transparent">
                <Link href="/login">Log In</Link>
              </Button>
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
            <span className="main__intro-values-item__count">{t("$65B")}</span>
            <span className="main__intro-values-item__name">
              {t("Investment")}
            </span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">{t("$350M")}</span>
            <span className="main__intro-values-item__name">{t("Payout")}</span>
          </div>
          <div className="main__intro-values-item">
            <span className="main__intro-values-item__count">+750</span>
            <span className="main__intro-values-item__name">
              {t("AllUsers")}
            </span>
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
