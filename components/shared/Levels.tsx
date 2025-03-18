import Image from "next/image";
import { Levels_swiper } from "./Levels_swiper";
import { useTranslations } from 'next-intl'

export const Levels = () => {
  const t = useTranslations('landing')
  return (
    <section className="levels">
      <Image
        alt="Bg"
        className="levels__bg"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-once="true"
        height={1920}
        src="/main/levels-bg.png"
        width={1920}
      />
      <div className="levels__bg-field" />
      <div className="site-holder">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <b>{t('personalized')}</b> {t('portfolio')}<b> {t('system')}</b>
        </h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t('prtfDesc')}
        </p>
        {/* Swiper */}

        <Levels_swiper />
      </div>
    </section>
  );
};
