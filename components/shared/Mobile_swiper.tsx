"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { useTranslations } from 'next-intl'

export const Mobile_swiper = () => {
  const t = useTranslations('landing')
  return (
    <div className="m-how__content">
      <Swiper
        className="swiper how-swiper"
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={24}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className={`how__item big-item`}>
              <Image
                priority
                alt="alt"
                height={200}
                src={"/main/stars_max.svg"}
                width={200}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('artIntli')}</span>
                <span className="how__item-text">
                  {t('artDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`how__item`}>
              <Image
                priority
                alt="alt"
                height={136}
                src={"/main/icons_cube.svg"}
                width={136}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('compStck')}</span>
                <span className="how__item-text">
                  {t('stckDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`how__item`}>
              <Image
                priority
                alt="alt"
                height={136}
                src={"/main/icons_bubbles.svg"}
                width={136}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('presciMetal')}</span>
                <span className="how__item-text">
                  {t('metalDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`how__item`}>
              <Image
                priority
                alt="alt"
                height={136}
                src={"/main/stars_bank.svg"}
                width={136}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('corptBonds')}</span>
                <span className="how__item-text">
                  {t('bondsDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`how__item`}>
              <Image
                priority
                alt="alt"
                height={136}
                src={"/main/oin_selector.svg"}
                width={136}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('oilSctr')}</span>
                <span className="how__item-text">
                  {t('oilDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`how__item`}>
              <Image
                priority
                alt="alt"
                height={136}
                src={"/main/icons__invest.svg"}
                width={136}
              />
              <div className="how__item-content">
                <span className="how__item-title">{t('InnvtStart')}</span>
                <span className="how__item-text">
                  {t('innvtDesc')}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
