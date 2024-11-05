import Image from "next/image";
import { NextPage } from "next";

import { Download } from "../ui/Download";
import { Phones_img } from "../ui/Phones_img";

export const Invest: NextPage = () => {
  return (
    <section className="main__mobile">
      <div className="site-holder">
        <div
          className="mobile__content"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="mobile__column">
            <h2 className="mobile__title">
              Invest anywhere,
              <br />
              <b>anytime</b>
            </h2>
            <span className="mobile__description">
              Instantly open new positions on the NextFi website and app
            </span>
            <div className="mobile__qr">
              <span className="mobile__qr-text">
                Point your phone to download the App
              </span>
              <div className="mobile__qr-img">
                <Image
                  alt="qr"
                  height={216}
                  quality={100}
                  src="/main/qr.png"
                  width={216}
                />
              </div>
            </div>
            <div className="mobile__more">
              <div className="mobile__download">
                <span className="mobile__download-title">
                  Download
                  <Download />
                </span>
                <div className="mobile__download-links">
                  <a className="mobile__download-link" href="">
                    <Image
                      alt={"appstore"}
                      height={96}
                      src={"/main/download_icons/apple-app-store.svg"}
                      width={96}
                    />
                  </a>
                  <a className="mobile__download-link" href="">
                    <Image
                      alt={"google"}
                      height={96}
                      src={"/main/download_icons/google-play.svg"}
                      width={96}
                    />
                  </a>
                </div>
              </div>
              <div className="mobile__info">
                <span className="mobile__info-title">+1000 users</span>
                <p className="mobile__info-text">
                  You always have access to investments at your fingertips
                </p>
              </div>
            </div>
          </div>

          <div
            className="mobile__image-wrapper"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Phones_img />
          </div>
        </div>
      </div>
    </section>
  );
};
