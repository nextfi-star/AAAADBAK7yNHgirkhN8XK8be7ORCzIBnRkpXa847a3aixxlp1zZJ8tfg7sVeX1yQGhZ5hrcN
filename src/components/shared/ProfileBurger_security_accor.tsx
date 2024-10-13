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
	icon: string
}
interface AccordionSectionType {
	title: string
	items: AccordionItemType[]
}
interface Props {
	securityData: AccordionSectionType[]
}

export const ProfileBurger_security_accor: NextPage<Props> = ({
	securityData,
}) => {
	return (
		<div className='flex flex-col gap-[20px] pb-[3.5rem]'>
			{securityData.map((section, index) => (
				<div key={index}>
					<Accordion className='' type='single' collapsible>
						<h5 className='sec__title flex items-center gap-[5px]'>
							{' '}
							{section.title}
						</h5>

						{section.items.map((item, idx) => (
							<AccordionItem key={idx} value={item.value}>
								<AccordionTrigger className='hover:no-underline'>
									<p className='flex items-center gap-[5px]'>
										<Image src={item.icon} width={30} height={30} alt='icon' />
										{item.trigger}
									</p>
								</AccordionTrigger>
								<AccordionContent className='flex justify-between'>
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
