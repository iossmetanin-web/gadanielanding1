import Image from "next/image";
import { HeartHandshake, Lock, GraduationCap, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/decor/Reveal";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { siteConfig, personalStory, deliverables } from "@/lib/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Этика",
    text: "Не работаю со страхом, давлением и обещаниями чудес.",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    text: "Ваша история остаётся между нами. Отзывы публикую только анонимно и с вашего согласия.",
  },
  {
    icon: GraduationCap,
    title: "Профессионализм",
    text: "Регулярное обучение, супервизия, постоянная практика более 8 лет.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/20 shadow-mystic">
              <Image
                src="/master/master-about.jpg"
                alt={`${siteConfig.masterName} — ${siteConfig.role}`}
                fill
                sizes="(max-width: 1024px) 384px, 360px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Обо мне"
              title={`${siteConfig.masterName} — ${siteConfig.role}`}
            />

            <Reveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
              <p className="rounded-xl border-l-2 border-gold/40 bg-white/[0.02] px-5 py-4 font-serif text-lg italic text-foreground/90">
                {personalStory}
              </p>
              <p>
                За {siteConfig.experienceYears} лет практики я провела более{" "}
                {siteConfig.consultationsCount} консультаций. Я не снимаю
                «порчу», не обещаю вернуть любимого и не работаю со страхом. Я
                помогаю увидеть то, что вы и так чувствуете, но пока не можете
                сформулировать.
              </p>
              <p>
                Каждая консультация — это разговор двух взрослых людей. Без
                эзотерического тумана, без давления, без сценариев «что
                обязательно случится». Только честный разбор вашей ситуации и
                опора для принятия решения.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="grid gap-4 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-gold/40"
                >
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.22}>
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-deep-purple/25 to-transparent p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold/80">
                  Что вы получите после консультации
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <Button asChild variant="link" className="h-auto p-0 text-gold">
                <a href="#contact" className="gap-1.5">
                  Познакомиться поближе
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
