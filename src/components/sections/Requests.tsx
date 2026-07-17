import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/decor/Reveal";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { requests } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Requests() {
  return (
    <section
      id="requests"
      className="relative scroll-mt-24 border-y border-border/40 bg-surface/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Запросы"
          title="С какими запросами приходят на расклад"
          description="Четыре самых частых направления. Если ваш не подходит ни под один — напишите, и мы сформулируем вопрос вместе."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {requests.map((item, idx) => {
            return (
              <Reveal
                as="article"
                key={item.title}
                delay={idx * 0.08}
                className={cn(
                  "group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-mystic sm:p-7"
                )}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                  {item.heading}
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="rounded-xl border border-border/60 bg-background/40 p-4">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold/80">
                      Запрос
                    </span>
                    <p className="mt-2 text-pretty font-serif text-base italic leading-relaxed text-foreground/90">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-gold/80">
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                      Как поможет расклад
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.help}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-gold/25 bg-gradient-to-br from-deep-purple/30 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="font-serif text-lg text-foreground sm:text-xl">
              Не нашли свой запрос?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Напишите мне — и мы сформулируем вопрос вместе.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href="#contact" className="gap-2">
              Разобрать мою ситуацию
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
