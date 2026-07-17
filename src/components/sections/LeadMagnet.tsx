import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/decor/Reveal";
import { leadMagnet, siteConfig } from "@/lib/site";

export function LeadMagnet() {
  return (
    <section className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/25 bg-gradient-to-br from-deep-purple/40 via-midnight/30 to-background p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-48 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                  <Gift className="size-3.5" aria-hidden="true" />
                  Бесплатно
                </span>
                <h2 className="text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                  {leadMagnet.title}
                </h2>
                <p className="text-base font-medium text-gold/90">
                  {leadMagnet.subtitle}
                </p>
                <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {leadMagnet.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                <Button asChild size="lg" className="gap-2">
                  <a href={siteConfig.contacts.telegram} target="_blank" rel="noopener noreferrer">
                    {leadMagnet.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground">
                  Без оплаты и без обязательств
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
