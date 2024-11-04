import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import Image from 'next/image'
import { NextPage } from 'next'

interface AccordionItemType {
	value: string
	trigger: string
	content: React.ReactNode 
}
interface AccordionSectionType {
	title: string
	icon: string
	items: AccordionItemType[]
}
interface Props {
	data: AccordionSectionType[]
}

export const ProfileBurger_profile_accor: NextPage<Props> = ({
	data,
}) => {
	return (
		<div className='flex flex-col gap-[20px]'>
			{data.map((section, index) => (
				<div key={index}>
					<Accordion className='' type='single' collapsible>
						<h5 className='sec__title flex items-center gap-[5px]'>
							<Image src={section.icon} width={44} height={44} alt='icon' />
							{section.title}
						</h5>

						{section.items.map((item, idx) => (
							<AccordionItem key={idx} value={item.value}>
								<AccordionTrigger className='hover:no-underline'>
									{item.trigger}
								</AccordionTrigger>
								<AccordionContent className='flex justify-between items-center'>
									{item.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<span className='block w-full min-h-[1px] bg-gray-500 dark:bg-white my-[10px]'></span>
				</div>
			))}
		</div>
	)
}
