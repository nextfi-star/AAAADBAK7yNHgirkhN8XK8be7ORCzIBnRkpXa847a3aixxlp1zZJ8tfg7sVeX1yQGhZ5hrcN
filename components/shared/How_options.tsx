import Image from 'next/image'
import { NextPage } from 'next'

const mainHowRowData = [
	{
		className: 'how__row',
		items: [
			{
				className: 'how__item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/icons_cube.svg',
					width: 136,
					height: 136,
					alt: 'Cube',
				},
				text: {
					title: 'Company Stocks',
					description:
						'Tracking successful promotions and ensuring financial security in trading on the market.',
				},
			},
			{
				className: 'how__item big-item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/stars_max.svg',
					width: 200,
					height: 200,
					alt: 'Cube',
				},
				text: {
					title: 'Artificial Intelligence',
					description:
						'They are the primary tool for conducting transactions in the financial market and the key to earning income from investments in the NextFi token.',
				},
			},
			{
				className: 'how__item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/icons_bubbles.svg',
					width: 136,
					height: 136,
					alt: 'Cube',
				},
				text: {
					title: 'Precious Metals',
					description:
						'Constantly increasing assets and executing profitable transactions with them.',
				},
			},
		],
	},
	{
		className: 'how__row',
		items: [
			{
				className: 'how__item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/stars_bank.svg',
					width: 136,
					height: 136,
					alt: 'Cube',
				},
				text: {
					title: 'Corporate Bonds',
					description:
						'Ownership of more than X bonds with regular updates and profitable financial transactions related to them.',
				},
			},
			{
				className: 'how__item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/oin_selector.svg',
					width: 136,
					height: 136,
					alt: 'Cube',
				},
				text: {
					title: 'Oil Sector',
					description:
						'Smart and efficient trading of oil products in the eastern market.',
				},
			},
			{
				className: 'how__item',
				dataAos: 'fade-up',
				dataAosDuration: 1500,
				dataAosOnce: true,
				image: {
					src: '/main/icons_cube.svg',
					width: 136,
					height: 136,
					alt: 'Cube',
				},
				text: {
					title: 'Innovative Startups',
					description:
						'Analysis and search for the most promising projects aimed at acquiring a stake and subsequent growth of dividends.',
				},
			},
		],
	},
]
export const How_options: NextPage = () => {
	return (
		<div className='how__content'>
			{mainHowRowData.map((row, index) => (
				<div className={row.className} key={index}>
					{row.items.map((item, itemIndex) => (
						<div
							className={item.className}
							key={itemIndex}
							data-aos={item.dataAos}
							data-aos-duration={item.dataAosDuration}
							data-aos-once={item.dataAosOnce}
						>
							<Image
								src={item.image.src}
								width={item.image.width}
								height={item.image.height}
								alt={item.image.alt}
							/>
							<div className='how__item-content big-item'>
								<span className='how__item-title'>{item.text.title}</span>
								<span className='how__item-text'>{item.text.description}</span>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	)
}
