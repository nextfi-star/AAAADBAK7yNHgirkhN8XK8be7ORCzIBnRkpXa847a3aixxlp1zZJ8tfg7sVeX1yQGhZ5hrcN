import { How_options, Mobile_swiper } from "./index";

export const How = () => {
  return (
    <section className="how">
      <div className="site-holder">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          How is income <b>from investments formed?</b>
        </h2>

        <How_options />

        {/* Mobile =>  */}
        <Mobile_swiper />
      </div>
    </section>
  );
};
