import { NextPage } from 'next'

export const Faq: NextPage = () => {
  return (
    <section className="main__faq">
      <div className="site-holder">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Frequently Asked <b>Questions</b>
        </h2>
        <div className="faq__content">
          <div className="faq__questions">
            <details data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <summary>What is NextFi?</summary>
              <p>
                Modern AI technologies allow you to read the market with perfect accuracy and make profitable
                transactions, due to which Next technologies generate a percentage of income for partners.
              </p>
            </details>
            <details data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <summary>
                Can I start investing with <br />
                just $1?
              </summary>
              <p>
                Modern AI technologies allow you to read the market with perfect accuracy and make profitable
                transactions, due to which Next technologies generate a percentage of income for partners.
              </p>
            </details>
            <details data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <summary>How many levels are there?</summary>
              <p>
                Modern AI technologies allow you to read the market with perfect accuracy and make profitable
                transactions, due to which Next technologies generate a percentage of income for partners.
              </p>
            </details>
            <details data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <summary>How to make money on investments?</summary>
              <p>
                Modern AI technologies allow you to read the market with perfect accuracy and make profitable
                transactions, due to which Next technologies generate a percentage of income for partners.
              </p>
            </details>
            <details data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <summary>How to make money on investments?</summary>
              <p>
                Modern AI technologies allow you to read the market with perfect accuracy and make profitable
                transactions, due to which Next technologies generate a percentage of income for partners.
              </p>
            </details>
          </div>

          <div className="faq__feedback">
            <h3 className="faq-title" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              Didn"t find the question you"re <br /> interested in?
            </h3>
            <p className="faq__description" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              Send your details and we will contact you shortly
            </p>
            <form className="faq__form">
              <input type="text" name="name" className="faq__form-input" placeholder="Name" />
              <input type="email" name="email" className="faq__form-input" placeholder="E-mail" />
              <div className="faq__form-field">
                <button className="faq__form-button">Send</button>
                <p className="faq__form-button__description">
                  By clicking the button, you agree to the terms of <a href="">the Privacy Policy.</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
