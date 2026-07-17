"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/decor/SectionHeading";
import { LegalDialog } from "@/components/sections/LegalDialog";

// Простая проверка: телефон (минимум 10 цифр) ИЛИ telegram-ник (@username или имя)
const PHONE_RE = /^(?:\+?7|8)?[\s\-()]*\d{3}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/;
const TG_RE = /^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/;

function validateContact(value: string): string | null {
  const v = value.trim();
  if (!v) return "Укажите телефон или ник в Telegram";
  // если похоже на телефон (содержит цифры и спецсимволы)
  const digits = v.replace(/\D/g, "");
  if (digits.length >= 10 && PHONE_RE.test(v)) return null;
  if (TG_RE.test(v)) return null;
  return "Введите корректный телефон (+7 ...) или Telegram-ник (@username)";
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    // honeypot: если заполнен — тихо «успех» для бота, реальной отправки нет
    const honeypot = String(data.get("website") ?? "").trim();
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    if (!name) {
      toast.error("Укажите, как к вам обращаться");
      return;
    }
    if (!consent) {
      toast.error("Подтвердите согласие на обработку персональных данных");
      return;
    }
    const err = validateContact(contact);
    if (err) {
      setContactError(err);
      toast.error(err);
      return;
    }
    setContactError(null);

    // ВАЖНО: реальная отправка формы будет подключена позже.
    // Сейчас — заглушка с уведомлением об успехе.
    setSubmitted(true);
    toast.success("Заявка отправлена!", {
      description:
        "Я свяжусь с вами в ближайшее время. Если срочно — напишите в любой мессенджер.",
    });
    form.reset();
    setConsent(false);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(46,31,71,0.55) 0%, rgba(17,17,22,0) 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-gold/20 bg-card/40 shadow-mystic">
          <div className="p-8 sm:p-10">
            <SectionHeading
              eyebrow="Записаться"
              title="Оставьте заявку — я напишу сама"
              description="Отвечу на вопросы и помогу сформулировать запрос. Без давления и навязчивости. Ответ — обычно в течение нескольких часов в рабочее время."
            />

            <div className="mt-8">
              {submitted ? (
                <div
                  role="status"
                  className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl border border-gold/30 bg-white/[0.03] p-8"
                >
                  <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-deep-purple/40 text-gold">
                    <CheckCircle2 className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Спасибо! Заявка отправлена
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Я получила вашу заявку и свяжусь с вами в ближайшее время.
                    Если вопрос срочный — напишите мне в Telegram, WhatsApp,
                    ВКонтакте или MAX.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-gold/40 text-gold hover:bg-gold/10 hover:text-gold"
                    onClick={() => setSubmitted(false)}
                  >
                    Отправить ещё одну заявку
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Honeypot-поле, скрытое от пользователей и ботов */}
                  <div aria-hidden="true" className="sr-only">
                    <label htmlFor="website">Сайт (не заполняйте)</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm text-foreground">
                      Как вас зовут
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ваше имя"
                      className="h-12 bg-background/60 text-base"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="contact"
                      className="text-sm text-foreground"
                    >
                      Телефон или Telegram
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 ___ ___-__-__  или  @username"
                      aria-invalid={contactError ? true : undefined}
                      className="h-12 bg-background/60 text-base"
                      onChange={() => contactError && setContactError(null)}
                    />
                    {contactError ? (
                      <p className="text-xs text-destructive" role="alert">
                        {contactError}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Куда мне удобнее вам ответить
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="message"
                      className="text-sm text-foreground"
                    >
                      Коротко о ситуации{" "}
                      <span className="text-muted-foreground">
                        (по желанию)
                      </span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Например: сложная ситуация в отношениях, хочу разобраться"
                      className="bg-background/60 text-base"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(v) => setConsent(v === true)}
                      required
                      className="mt-0.5"
                    />
                    <label htmlFor="consent" className="cursor-pointer text-xs leading-relaxed text-muted-foreground">
                      Я согласен(на) на обработку персональных данных и принимаю{" "}
                      <LegalDialog legalKey="disclaimer">
                        <span className="text-gold underline-offset-2 hover:underline">
                          условия дисклеймера
                        </span>
                      </LegalDialog>
                      .
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 gap-2 text-base"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Получить ответ в течение 2 часов
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
