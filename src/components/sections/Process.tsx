import { Reveal } from "@/components/decor/Reveal";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Как проходит"
          title="Спокойно, понятно, без неожиданностей"
          description="Вы всегда знаете, что происходит на каждом этапе."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold/40 via-gold/15 to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2"
          />
          <ol className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {processSteps.map((step, idx) => (
              <Reveal
                as="li"
                key={step.number}
                delay={idx * 0.08}
                className="relative flex gap-5 lg:gap-6"
              >
                <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background font-serif text-base font-semibold text-gold shadow-mystic">
                  {step.number}
                </div>
                <div className="flex flex-col gap-2 pt-1.5">
                  <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-start gap-4 rounded-2xl border border-gold/25 bg-gradient-to-br from-deep-purple/30 to-transparent p-6 sm:p-7">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-white/[0.03] text-gold">
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2Z" />
                <path d="M10 22h4" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-lg font-medium text-foreground">
                Вы не останетесь один на один с ответами
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                После консультации у вас будет 2 дня, чтобы задать уточняющие
                вопросы по разбору — без доплат.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
