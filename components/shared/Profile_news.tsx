import { useMemo } from 'react'
import Link from 'next/link'
import ArrowUP from '../ui/ArrowUP'
import { useTranslations } from 'next-intl'

export const Profile_news = () => {
	const t = useTranslations('overview')
	const getCurrentTime = () => {
		const now = new Date()
		let hours = now.getHours()
		const minutes = String(now.getMinutes()).padStart(2, '0')
		const ampm = hours >= 12 ? 'pm' : 'am'

		hours = hours % 12 || 12

		return `${hours}:${minutes} ${ampm}`
	}

	const getCurrentDate = () => {
		const now = new Date()
		const day = String(now.getDate()).padStart(2, '0')
		const month = String(now.getMonth() + 1).padStart(2, '0')
		const year = now.getFullYear()

		return `${day}.${month}.${year}`
	}
	const getCurrentMonthName = () => {
		const now = new Date()
		return now.toLocaleString('en-En', { month: 'long' })
	}
	const dataNews = useMemo(
		() => [
			{
				date: getCurrentDate(),
				news: 'Kalshi seeks permission to trade political contracts amid CFTC appeal',
				id: 1,
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
			<span className='profile-news-date'>
				{getCurrentMonthName() + ' ' + getCurrentDate()}
			</span>
			<ul className='profile-news-list'>
				<li className='profile-news-list-item'>
					{dataNews.map(news => {
						const date = new Date(news.date)
						return (
							<Link
								key={news.id}
								className='profile-news-list-item-link'
								href='#'
							>
								<span className='news-date'>{getCurrentTime()}</span>
								{news.news}
							</Link>
						)
					})}
				</li>
			</ul>
		</div>
	)
}
