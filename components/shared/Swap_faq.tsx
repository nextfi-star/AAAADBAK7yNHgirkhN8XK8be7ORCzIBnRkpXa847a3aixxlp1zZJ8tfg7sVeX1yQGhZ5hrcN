import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { Divider } from "@heroui/divider"
import { NextPage } from 'next'
const data = [
	{
		title: 'How do I convert crypto NextFi Platform?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 1,
		val: '1'
	},
	{
		title: 'Which crypto can I convert on NextFi Platform?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 2,
		val: '2'
	},
	{
		title: 'How is crypto conversion different from trading?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 3,
		val: '3'
	},
	{
		title: 'Where can I find my converted crypto?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 4,
		val: '4'
	},
	{
		title: 'How can I deposit/withdraw the crypto converted?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		id: 5,
		val: '5'
	},
]
const Swap_faq: NextPage = () => {
	return (
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
						<Divider />
					</AccordionItem>
				))}
		</Accordion>
	)
}

export default Swap_faq
