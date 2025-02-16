import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { Button } from "@nextui-org/react";

import { Era_phone } from "../ui/Era_phone";

export const Era: NextPage = () => {
  return (
    <section className="main__era">
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
              <b>NextFi</b> – a new era in the world of financial investments
              based <b>on artificial intelligence</b>
            </h2>
            <p
              className="era__description"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              Modern artificial intelligence technologies have been trained by
              hundreds of the best programmers based on data from the largest
              investment assets and funds.&nbsp; As a result, the Next
              technologies individually generate a percentage of investments for
              partners and create liquidity for the NextFi token.
            </p>
            <div
              className="main__era-column-bottom mb-[8rem]"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Button className="btn btn-blue">Get started</Button>
              <div className="main__era-column-bottom-info">
                <div className="main__era-column-bottom-info__item">
                  <span>50&nbsp;000+</span>
                  <p>
                    Computational operations for market analysis with continuous
                    improvement of AI
                  </p>
                </div>
                <div className="main__era-column-bottom-info__item">
                  <span>75% of Users</span>
                  <p>
                    Make repeated investments in the NextFi investment system
                  </p>
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
                  Up to 120% growth per year
                </span>
                <p className="main__era-stats-item__text">
                  Daily growth of your capital with the ability to track in real
                  time and secure profits at any moment.
                </p>
              </div>
              <div className="main__era-stats-item">
                <span className="main__era-stats-item__title">
                  Up to 12% bonuses on savings balance
                </span>
                <p className="main__era-stats-item__text">
                  Earning smart interest on the amount of your investments in
                  your personal account.
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
