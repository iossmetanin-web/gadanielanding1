import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/decor/Reveal";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Частые вопросы"
          description="Если ответа на ваш вопрос здесь нет — просто напишите мне, я отвечу лично."
        />

        <Reveal delay={0.1} className="mt-10">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="flex flex-col gap-3"
          >
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`faq-${idx}`}
                className="rounded-xl border border-border bg-card/40 px-5 data-[state=open]:border-gold/40 data-[state=open]:bg-card/60"
              >
                <AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
