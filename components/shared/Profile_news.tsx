import { useMemo } from 'react'
import Link from 'next/link'
import ArrowUP from '../ui/ArrowUP'
import { useTranslations } from 'next-intl'

export const Profile_news = () => {
	const t = useTranslations('overview')
	const dataNews = useMemo(
		() => [
			{
				date: '11:24 am',
				news: 'Kalshi seeks permission to trade political contracts amid CFTC appeal',
				id: 1,
			},
			{
				date: '11:24 am',
				news: 'Kalshi seeks permission to trade political contracts amid CFTC appeal',
				id: 2,
			},
			{
				date: '11:24 am',
				news: 'Kalshi seeks permission to trade political contracts amid CFTC appeal',
				id: 3,
			},
			{
				date: '11:24 am',
				news: 'Kalshi seeks permission to trade political contracts amid CFTC appeal',
				id: 4,
			},
		],
		[]
	)

	return (
		<div className='profile-news md:!bg-[#fff] dark:!bg-transparent md:dark:!bg-[#1e1e1e66] shadow-none md:!shadow-medium dark:!shadow-none w-full'>
			<div className='profile-news-title'>
				<span className='profile-news-title-first'>{t('news')}</span>
				<span>
					{t('moreNews')} <ArrowUP />
				</span>
			</div>
			<span className='profile-news-date'>September 25, 2024</span>
			<ul className='profile-news-list'>
				<li className='profile-news-list-item'>
					{dataNews.map(news => (
						<Link
							key={news.id}
							className='profile-news-list-item-link'
							href='#'
						>
							<span className='news-date'>{news.date}</span>
							{news.news}
						</Link>
					))}
				</li>
			</ul>
		</div>
	)
}
