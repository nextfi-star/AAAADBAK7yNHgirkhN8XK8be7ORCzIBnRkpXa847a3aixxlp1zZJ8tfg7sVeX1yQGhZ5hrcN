import React from 'react'
import { How_options, Mobile_swiper } from './index'
const slideData = [
	{
		img: '/main/stars_max.svg',
		title: 'Artificial Intelligence',
		description:
			'They are the primary tool for conducting transactions in thefinancial market and the key to earning income from investments in the NextFi token.',
		width: 164,
		height: 164,
		imgBig: 'big-item',
	},
	{
		img: '/main/icons_cube.svg',
		title: 'Company Stocks',
		description:
			'Tracking successful promotions and ensuring financial security in trading on the market.',
	},
	{
		img: '/main/icons_bubbles.svg',
		title: 'Precious Metals',
		description:
			'Constantly increasing assets and executing profitable transactions with them.',
	},
	{
		img: '/main/stars_bank.svg',
		title: 'Corporate Bonds',
		description:
			'Ownership of more than X bonds with regular updates and profitable financial transactions related to them.',
	},
	{
		img: '/main/oin_selector.svg',
		title: 'Oil Sector',
		description:
			'Smart and efficient trading of oil products in the eastern market.',
	},
	{
		img: '/main/icons_cube.svg',
		title: 'Innovative Startups',
		description:
			'Analysis and search for the most promising projects aimed at acquiring a stake and subsequent growth of dividends.',
	},
]
export const How = () => {
	return (
		<section className='how'>
			<div className='site-holder'>
				<h2
					className='section-title'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					How is income <b>from investments formed?</b>
				</h2>

				<How_options />

				{/* Mobile =>  */}
				<Mobile_swiper />
			</div>
		</section>
	)
}
