import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Era_phone } from "../ui/Era_phone";
import { useTranslations } from "next-intl";

export const Era = () => {
  const t = useTranslations("landing");
  return (
    <section className="main__era" id="main__era">
      <Image
        priority
        alt="bg"
        className="main__era-bg"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
        height={2034.89}
        src="/main/era-bg.png"
        width={1918.5}
      />
      <Era_phone />
      <div className="site-holder">
        <div className="main__era-content">
          <div className="main__era-column">
            <h2
              className="era__title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <b>NextFi</b> {t("nextfiNewEra")} <b>{t("onArtifi")}</b>
            </h2>
            <p
              className="era__description"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              {t("modernArtifi")}
            </p>
            <div
              className="main__era-column-bottom mb-[8rem]"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Button className="btn btn-blue">{t("getStarted")}</Button>
              <div className="main__era-column-bottom-info">
                <div className="main__era-column-bottom-info__item">
                  <span>50&nbsp;000+</span>
                  <p>{t("computat")}</p>
                </div>
                <div className="main__era-column-bottom-info__item">
                  <span>75% {t("ofUsers")}</span>
                  <p>{t("makeRepeat")}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="main__era-stats"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <div className="main__era-stats-text">
              <div className="main__era-stats-item">
                <span className="main__era-stats-item__title">
                  {t("upTo120")}
                </span>
                <p className="main__era-stats-item__text">{t("dailyGrow")}</p>
              </div>
              <div className="main__era-stats-item">
                <span className="main__era-stats-item__title">
                  {t("upTo12")}
                </span>
                <p className="main__era-stats-item__text">
                  {t("earningSmart")}
                </p>
              </div>
            </div>
            <div className="main__era-stats-wrapper">
              <Image
                alt="Stats"
                height={309}
                src="/main/era-stats.png"
                width={504}
              />
            </div>
          </div>
          <div
            className="download__links"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <Link className="download__links-item" href="#">
              <Image
                alt="Apptoide"
                height={56}
                quality={100}
                src={"/main/download_icons/Aptoide.svg"}
                width={56}
              />
              <span />
            </Link>
            <Link className="download__links-item" href="#">
              <Image
                alt="Appstore"
                height={56}
                quality={100}
                src={"/main/download_icons/google-play.svg"}
                width={56}
              />
            </Link>
            <Link className="download__links-item" href="#">
              <Image
                alt="Google play"
                height={56}
                quality={100}
                src={"/main/download_icons/apple-app-store.svg"}
                width={56}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
