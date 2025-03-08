import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionBurger";
import { useTranslations } from 'next-intl'

const Withdrawal_faq = () => {
	const t = useTranslations('withdrawal')
	return (
		<div className='shadow-medium dark:!shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit'>
			<h5 className='text-[18px] md:text-[32px] mb-[23px]'>FAQ</h5>

			<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="howMake">
				<AccordionTrigger>{t("howMake")}</AccordionTrigger>
				<AccordionContent>{t("howmake2")}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="whyStill">
				<AccordionTrigger>{t("whyStill")}</AccordionTrigger>
				<AccordionContent>{t("whyStill2")}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="howSelect">
				<AccordionTrigger className='text-left'>{t("howSelect")}</AccordionTrigger>
				<AccordionContent>{t("howSelect2")}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="doI">
				<AccordionTrigger>{t("doI")}</AccordionTrigger>
				<AccordionContent>{t("doI2")}</AccordionContent>
			</AccordionItem>
		</Accordion>
		</div>
	)
}

export default Withdrawal_faq
