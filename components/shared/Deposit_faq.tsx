import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionBurger";
import { Divider } from "@heroui/divider";
import { useTranslations } from "next-intl";

const Deposit_faq = () => {
  const t = useTranslations("deposit");
  return (
    <div className="shadow-medium dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit">
      <h5 className="text-[18px] md:text-[32px] mb-[23px]">{t("faq")}</h5>

      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="howMake">
          <AccordionTrigger className="text-left">
            {t("howMake")}
          </AccordionTrigger>
          <AccordionContent>{t("howmake2")}</AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="whyStill">
          <AccordionTrigger className="text-left">
            {t("whyStill")}
          </AccordionTrigger>
          <AccordionContent>{t("whyStill2")}</AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="howSelect">
          <AccordionTrigger className="text-left">
            {t("howSelect")}
          </AccordionTrigger>
          <AccordionContent>{t("howSelect2")}</AccordionContent>
          <Divider />
        </AccordionItem>

        <AccordionItem value="doI">
          <AccordionTrigger className="text-left">{t("doI")}</AccordionTrigger>
          <AccordionContent>{t("doI2")}</AccordionContent>
          <Divider />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Deposit_faq;
