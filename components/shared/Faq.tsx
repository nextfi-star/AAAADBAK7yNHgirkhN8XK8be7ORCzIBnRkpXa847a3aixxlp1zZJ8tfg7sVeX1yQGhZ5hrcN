
export const Faq = () => {
	return (
		<section className='main__faq'>
			<div className='site-holder'>
				<h2
					className='section-title'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					Frequently Asked <b>Questions</b>
				</h2>
				<div className='faq__content'>
					<div className='faq__questions'>
						<details
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							<summary>What is NextFi?</summary>
							<p>
								NextFi is an innovative financial investment platform powered by
								cutting-edge artificial intelligence. Trained on vast datasets
								from the world’s leading investment funds and asset managers,
								our AIdriven technology dynamically analyzes market trends,
								optimizes investment strategies, and generates sustainable
								liquidity for the NextFi token. With NextFi, investors gain
								access to a smarter, data-driven approach to wealth growth,
								ensuring maximum efficiency and risk management in an
								ever-evolving financial landscape
							</p>
						</details>
						<details
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							<summary>
								What is the minimum investment required to start with NextFi?
							</summary>
							<p>
								The minimum investment required to start with NextFi is $20.
								This amount ensures optimal allocation of AI-driven investment
								strategies, providing users with the best possible returns while
								maintaining system efficiency.
							</p>
						</details>
						<details
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							<summary>How does NextFi generate profits?</summary>
							<p>
								Our AI-powered algorithms analyze market trends, manage risks,
								and execute strategic investments across DeFi, liquidity mining,
								algorithmic trading, and other financial instruments to maximize
								returns.
							</p>
						</details>
						<details
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							<summary>How does NextFi ensure the safety of my funds?</summary>
							<p>
								NextFi employs advanced AI-driven risk management, a dedicated
								liquidity reserve, and diversified asset allocation to safeguard
								investments from volatility and market fluctuations.
							</p>
						</details>
						<details
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							<summary>
								What makes NextFi different from other investment platforms?
							</summary>
							<p>
								Unlike traditional investment platforms, NextFi integrates AI
								and automation to continuously optimize portfolio performance,
								adapt to market changes in real time, and provide users with a
								highly efficient, transparent, and secure investment experience.
							</p>
						</details>
					</div>

					<div className='faq__feedback'>
						<h3
							className='faq-title'
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							Didn't find the question you're <br /> interested in?
						</h3>
						<p
							className='faq__description'
							data-aos='fade-up'
							data-aos-duration='1500'
							data-aos-once='true'
						>
							Send your details and we will contact you shortly
						</p>
						<form className='faq__form'>
							<input
								className='faq__form-input'
								name='name'
								placeholder='Name'
								type='text'
							/>
							<input
								className='faq__form-input'
								name='email'
								placeholder='E-mail'
								type='email'
							/>
							<div className='faq__form-field'>
								<button className='faq__form-button'>Send</button>
								<p className='faq__form-button__description'>
									By clicking the button, you agree to the terms of{' '}
									<a href=''>the Privacy Policy.</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
