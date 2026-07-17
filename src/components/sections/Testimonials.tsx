import Image from "next/image";
import { Quote, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/decor/Reveal";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 border-y border-border/40 bg-surface/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Истории, которыми поделились клиенты"
          description="Имена изменены. Каждый отзыв опубликован с согласия клиента. Конкретика важнее восторженных слов."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal
              as="article"
              key={`${t.name}-${t.age}`}
              delay={idx * 0.1}
              className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/50 p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-gold/30 bg-deep-purple/40">
                  <Image
                    src={t.avatar}
                    alt={`Анонимный отзыв клиентки ${t.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t.name}, {t.age}
                  </p>
                  <span className="text-xs uppercase tracking-[0.14em] text-gold/80">
                    запрос: {t.topic}
                  </span>
                </div>
              </div>

              <Quote
                className="size-6 text-gold/40"
                aria-hidden="true"
              />

              <p className="text-pretty text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                {t.text}
              </p>

              <div className="mt-auto flex items-start gap-2 rounded-lg border border-gold/15 bg-white/[0.02] p-3">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-gold/70" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-foreground/80">
                  <span className="text-gold/80">Главный инсайт: </span>
                  {t.insight}
                </p>
              </div>

              <p className="flex items-center gap-1.5 pt-1 text-[11px] text-muted-foreground/70">
                <ShieldCheck className="size-3.5 text-gold/60" aria-hidden="true" />
                отзыв опубликован с согласия клиента
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
