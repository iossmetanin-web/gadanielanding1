import Image from "next/image";
import { Mail, Clock, AlertTriangle, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { MessengerLinks } from "@/components/sections/MessengerLinks";
import { LegalDialog } from "@/components/sections/LegalDialog";

export function SiteFooter() {
  return (
    <footer id="footer" className="mt-auto border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2.5" aria-label={siteConfig.brand}>
              <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-gold/40">
                <Image
                  src="/master/master-logo.jpg"
                  alt={siteConfig.masterName}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-base font-semibold text-foreground">
                  {siteConfig.masterName}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-gold/80">
                  Таро-консультации
                </span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Онлайн-консультации {siteConfig.city}. Разбор ситуаций мягко,
              конфиденциально и этично.
            </p>
            <nav aria-label="Навигация" className="flex flex-wrap gap-x-5 gap-y-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold/80">
              Контакты
            </h3>
            <MessengerLinks className="flex-col" />
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-gold/70" aria-hidden="true" />
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock className="size-4 text-gold/70" aria-hidden="true" />
                {siteConfig.contacts.workHours}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold/80">
              <FileText className="size-3.5" aria-hidden="true" />
              Документы
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <LegalDialog legalKey="privacy" trigger={<span>Политика конфиденциальности</span>} />
              </li>
              <li>
                <LegalDialog legalKey="oferta" trigger={<span>Публичная оферта</span>} />
              </li>
              <li>
                <LegalDialog legalKey="consent" trigger={<span>Согласие на обработку персональных данных</span>} />
              </li>
              <li>
                <LegalDialog legalKey="disclaimer" trigger={<span>Дисклеймер</span>} />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gold/15 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-gold/80"
              aria-hidden="true"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold/90">
                Дисклеймер
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Услуги на данном сайте носят исключительно консультационный и
                развлекательный характер. Таро-консультации не являются
                медицинской, психотерапевтической или юридической услугой, не
                заменяют консультации квалифицированных специалистов. Результаты
                не гарантируют изменения физических событий. Все решения клиент
                принимает самостоятельно.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.masterName}. Все права
            защищены.
          </p>
          <p>Консультационные и развлекательные услуги</p>
        </div>
      </div>
    </footer>
  );
}
