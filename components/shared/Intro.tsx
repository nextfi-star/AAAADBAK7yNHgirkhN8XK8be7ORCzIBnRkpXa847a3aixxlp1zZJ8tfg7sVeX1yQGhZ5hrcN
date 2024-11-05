import Image from "next/image";
import { Intro__wave } from "../ui/Intro__wave";
import { Glow } from "../ui/Glow";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import { NextPage } from 'next'
import { Button } from '@nextui-org/react'

export const Intro: NextPage = () => {
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
            <div className="m-main__img-wrapper z-[9]">
              <Image width={768} height={650} src="/main/Illustration.svg" alt="" className="main-img" quality={100} />
            </div>
            <span data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
              Modern AI solutions provide reliable tokenomics, sustained growth in investments, and ensure the safety of
              your funds.
            </span>
            <div className="main__buttons" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
              <Button className="btn btn-blue">
              <Link href="/signup">
                Sign Up
              </Link>
              </Button>
             <Button className="btn btn-transparent">
             <Link href="/login">
                Log In
              </Link>
             </Button>
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
