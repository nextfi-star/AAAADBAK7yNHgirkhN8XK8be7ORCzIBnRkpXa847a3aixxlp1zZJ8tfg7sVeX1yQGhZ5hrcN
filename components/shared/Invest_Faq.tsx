import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { Divider } from '@nextui-org/divider'
import { NextPage } from 'next'
const data = [
	{
		title: 'How do I convert crypto NextFi Platform?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 1,
		val: '1',
	},
	{
		title: 'How do I convert crypto NextFi Platform?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 22,
		val: '22',
	},
	{
		title: 'Which crypto can I convert on NextFi Platform?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 2,
		val: '2',
	},
	{
		title: 'How is crypto conversion different from trading?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 3,
		val: '3',
	},
	{
		title: 'Where can I find my converted crypto?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 4,
		val: '4',
	},
	{
		title: 'How can I deposit/withdraw the crypto converted?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 5,
		val: '5',
	},
	{
		title: 'How can I deposit/withdraw the crypto converted?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 6,
		val: '6',
	},
	{
		title: 'How can I deposit/withdraw the crypto converted?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 7,
		val: '7',
	},
]
export const Invest_Faq: NextPage = () => {
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
							<Divider className={`${item.id === 7 ? 'opacity-0' : ''}`}/>
						</AccordionItem>
					))}
			</Accordion>
		</div>
	)
}
