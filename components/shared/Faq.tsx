import { useTranslations } from "next-intl";

export const Faq = () => {
  const t = useTranslations("landing");
  return (
    <section className="main__faq" id="main__faq">
      <div className="site-holder">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("freqAsked")} <b>{t("freqQuest")}</b>
        </h2>
        <div className="faq__content">
          <div className="faq__questions">
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("whatis")} NextFi?</summary>
              <p>{t("whatisDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("minimum")}</summary>
              <p>{t("minDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("howDoes")}</summary>
              <p>{t("doesDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("safAi")}</summary>
              <p>{t("aiDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("diff")}</summary>
              <p>{t("diffDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("howDowinvest")}</summary>
              <p>{t("diffDesc")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("whereMoney")}</summary>
              <p>{t("whereMoney2")}</p>
            </details>
            <details
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <summary>{t("howOften")}</summary>
              <p>{t("howOften2")}</p>
            </details>
          </div>

          <div className="faq__feedback">
            <h3
              className="faq-title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              {t("didntFind")} <br /> {t("interested")}?
            </h3>
            <p
              className="faq__description"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              {t("findDesc")}
            </p>
            <form className="faq__form">
              <input
                className="faq__form-input"
                name="name"
                placeholder={t("placeJolderName")}
                type="text"
              />
              <input
                className="faq__form-input"
                name="email"
                placeholder={t("placeJolderEmail")}
                type="email"
              />
              <div className="faq__form-field">
                <button className="faq__form-button">{t("send")}</button>
                <p className="faq__form-button__description">
                  {t("byClick")} <a href="#">{t("thePriv")}.</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
