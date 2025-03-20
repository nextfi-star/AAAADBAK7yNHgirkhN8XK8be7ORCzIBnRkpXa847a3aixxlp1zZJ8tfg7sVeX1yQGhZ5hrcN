import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionBurger";
import { Divider } from "@heroui/divider";
import { useTranslations } from "next-intl";

const Withdrawal_faq = () => {
  const t = useTranslations("withdrawal");
  return (
    <div className="shadow-medium dark:!shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit">
      <h5 className="text-[16px] md:text-[32px] mb-[23px]">FAQ</h5>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="howMake">
          <AccordionTrigger className="md:text-[20px]">
            {t("howMake")}
          </AccordionTrigger>
          <AccordionContent className="text-[16px] md:text-[20px]">
            {t("howmake2")}
          </AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="whyStill">
          <AccordionTrigger className="md:text-[20px]">
            {t("whyStill")}
          </AccordionTrigger>
          <AccordionContent className="text-[16px] md:text-[20px]">
            {t("whyStill2")}
          </AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="howSelect">
          <AccordionTrigger className="md:text-[20px] text-left">
            {t("howSelect")}
          </AccordionTrigger>
          <AccordionContent className="text-[16px] md:text-[20px]">
            {t("howSelect2")}
          </AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="doI">
          <AccordionTrigger className="md:text-[20px]">
            {t("doI")}
          </AccordionTrigger>
          <AccordionContent className="text-[16px] md:text-[20px]">
            {t("doI2")}
          </AccordionContent>
          <Divider />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Withdrawal_faq;
