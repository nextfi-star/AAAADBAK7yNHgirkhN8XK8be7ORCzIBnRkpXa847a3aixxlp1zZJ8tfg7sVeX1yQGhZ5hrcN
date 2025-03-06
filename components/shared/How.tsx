import { useTranslations } from 'next-intl'
import { How_options, Mobile_swiper } from "./index";

export const How = () => {
  const t = useTranslations('landing')
  return (
    <section className="how">
      <div className="site-holder">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t('howIncome')} <b>{t('howIncome2')}</b>
        </h2>

        <How_options />

        {/* Mobile =>  */}
        <Mobile_swiper />
      </div>
    </section>
  );
};
