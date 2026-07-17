import { ArrowRight, ShieldCheck, Lock, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/decor/Reveal";
import { siteConfig } from "@/lib/site";

const trustItems = [
  { icon: BadgeCheck, label: `Более ${siteConfig.experienceYears} лет практики` },
  { icon: ShieldCheck, label: `${siteConfig.consultationsCount} консультаций` },
  { icon: Lock, label: "Полная конфиденциальность" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative isolate overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16"
    >
      {/* Виньетка + плавный переход к фону страницы снизу */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "radial-gradient(90% 80% at 50% 40%, transparent 45%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative z-20 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal delay={0.05}>
          <h1 className="text-balance font-serif text-[2.1rem] font-semibold leading-[1.12] text-foreground sm:text-5xl lg:text-[3.2rem]">
            Ясность в отношениях, работе и жизненном выборе — за{" "}
            <span className="text-gold">одну консультацию</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Помогаю увидеть вашу ситуацию со стороны — спокойно, без мистики и
            давления. Вы получаете честный разбор и опору, чтобы принять
            решение, которое действительно ваше.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-xl border border-gold/20 bg-white/[0.02] px-4 py-2.5 text-sm text-foreground/90">
            <Clock className="size-4 shrink-0 text-gold" aria-hidden="true" />
            {siteConfig.contacts.firstReply}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="h-12 px-7 text-base">
              <a href="#contact" className="gap-2">
                Записаться на расклад
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="size-4 text-gold/80" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
