import React from "react";
import Image from "next/image";
import { NextPage } from "next";

import { Balance_img } from "../ui/Balance_img";

import { Getstarted_swiper } from "./Getstarted_swiper";

export const Get_started: NextPage = () => {
  return (
    <section className="main__getstarted">
      <div className="site-holder">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          How to get <b>started</b>
        </h2>
        <p
          className="section-description medium-margin"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Our goal is to create the simplest and most comfortable conditions for
          investing in the NextFi project.
        </p>

        <div className="getstarted__content">
          <div
            className="getstarted__row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="getstarted__row-item">
              <span className="getstarted__item-title">Account creation</span>
              <p className="getstarted__item-text">
                Simple and quick registration on our platform. In just a few
                minutes, you"ll gain access to all the features of NextFi.
              </p>
              <a className="btn btn-blue" href="#">
                Sign Up
              </a>
              <Image
                alt="bubble"
                className="bubble big"
                height={36}
                quality={100}
                src={"/main/download_icons/Ellipse 16.svg"}
                width={36}
              />
              <Image
                alt="bubble"
                className="bubble"
                height={20}
                quality={100}
                src={"/main/download_icons/Ellipse 15.svg"}
                width={20}
              />
            </div>
            <div className="getstarted__row-item">
              <span className="getstarted__item-title">Token purchase</span>
              <p className="getstarted__item-text">
                You can purchase the NextFi token using most popular
                cryptocurrencies. The fixed price and bonus system allow each
                early user of our platform to gain maximum advantages.
              </p>
              <a className="btn btn-blue" href="">
                Make a deposit
              </a>
            </div>
          </div>

          <div
            className="getstarted__big-item"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <span className="getstarted__item-title">
              Investment in an investment box
            </span>
            <p className="getstarted__item-text">
              The convenient investment box system of NextFi offers flexible
              investment conditions. You can always withdraw your funds early or
              choose a level that matches your requirements.
            </p>

            <div className="getstarted__big-content">
              {/* SWIPER */}
              <Getstarted_swiper />

              <Balance_img />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
