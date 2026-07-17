"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ek-taro-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        // небольшая задержка, чтобы не перекрывать первый экран
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage может быть недоступен (приватный режим) — показываем баннер
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // игнорируем ошибку записи
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Уведомление об использовании cookie"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-gold/25 bg-card/95 p-5 shadow-mystic backdrop-blur-xl sm:flex-row sm:items-center sm:gap-5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-deep-purple/40 text-gold">
          <Cookie className="size-5" aria-hidden="true" />
        </span>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Мы используем cookie и метрики (Яндекс.Метрика, ВК Пиксель) для
          аналитики посещаемости. Продолжая, вы соглашаетесь с обработкой данных
          согласно{" "}
          <a href="#contact" className="text-gold underline-offset-2 hover:underline">
            Политикой конфиденциальности
          </a>
          .
        </p>
        <Button
          size="sm"
          onClick={accept}
          className="shrink-0 sm:h-9"
        >
          Принять
        </Button>
      </div>
    </div>
  );
}
