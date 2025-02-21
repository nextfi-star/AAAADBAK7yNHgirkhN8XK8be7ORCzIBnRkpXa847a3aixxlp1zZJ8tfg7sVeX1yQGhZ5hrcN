import Image from "next/image";
import { Levels_swiper } from "./Levels_swiper";

export const Levels = () => {
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
          <b>Personalised</b> Investment Portfolio<b> System.</b>
        </h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Our Personalised Investment Portfolio System allows you to invest in stocks, bonds, startups, and commodities, providing tailored opportunities for capital growth based on your experience, goals, and preferences.
        </p>
        {/* Swiper */}

        <Levels_swiper />
      </div>
    </section>
  );
};
