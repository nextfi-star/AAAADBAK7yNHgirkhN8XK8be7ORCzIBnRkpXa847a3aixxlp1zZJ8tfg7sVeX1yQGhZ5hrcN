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
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 1,
				val: '1',
			},
			{
				title: t('whichCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 22,
				val: '22',
			},
			{
				title: t('whichCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 2,
				val: '2',
			},
			{
				title: t('howCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 3,
				val: '3',
			},
			{
				title: t('whereCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 4,
				val: '4',
			},
			{
				title: t('depositCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 5,
				val: '5',
			},
			{
				title: t('depositCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 6,
				val: '6',
			},
			{
				title: t('depositCrypto'),
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 7,
				val: '7',
			},
		],
		[]
	)
	return (
		<div className='bg-[#FFFFFF] dark:bg-[#1e1e1e66] md:shadow-medium dark:shadow-none w-full p-[26px_16px] md:p-[26px_36px_6px] rounded-[30px]'>
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
