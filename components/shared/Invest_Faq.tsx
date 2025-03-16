import { useMemo } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { Divider } from '@heroui/divider'
import { useTranslations } from 'next-intl'

export const Invest_Faq = () => {
	const t = useTranslations('invest')
	const data = useMemo(
		() => [
			{
				title: t('howConvert'),
				content: t('howConvert2'),
				id: 1,
				val: '1',
			},
			{
				title: t('whichCrypto'),
				content: t('whichCrypto2'),
				id: 22,
				val: '22',
			},
			{
				title: t('howCrypto'),
				content: t('howCrypto2'),
				id: 2,
				val: '2',
			},
			{
				title: t('whereCrypto'),
				content: t('whereCrypto2'),
				id: 3,
				val: '3',
			},
			{
				title: t('depositCrypto'),
				content: t('depositCrypto2'),
				id: 4,
				val: '4',
			},
		],
		[]
	)
	return (
		<div className='shadow-medium dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit'>
			<h5 className='text-[18px] md:text-[32px] mb-[23px]'>{t('faq')}</h5>
			<Accordion
				collapsible
				className='w-full flex flex-col items-center justify-between'
				type='single'
			>
				{data &&
					data.map(item => (
						<AccordionItem value={item.val} className='w-full' key={item.val}>
							<AccordionTrigger className='hover:no-underline w-full md:text-[20px] text-left font-normal text-[16px]'>
								{item.title}
							</AccordionTrigger>

							<AccordionContent className='flex w-full justify-between items-center text-[16px] md:text-[20px]'>
								{item.content}
							</AccordionContent>
							<Divider className={`${item.id === 7 ? 'opacity-0' : ''}`} />
						</AccordionItem>
					))}
			</Accordion>
		</div>
	)
}
