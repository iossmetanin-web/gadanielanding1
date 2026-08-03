"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — плавное появление контента при скролле.
 *
 * Архитектура (CSS-only, без framer-motion):
 *
 * 1. SSR: рендерим `class="reveal"` (без --hidden). Контент ВИДЕН по умолчанию.
 *    Это убирает проблему «пустой страницы до гидратации», которая была с
 *    framer-motion (initial:opacity:0 делал весь контент невидимым в SSR HTML).
 *
 * 2. useLayoutEffect после монтирования (до paint):
 *    - проверяем, находится ли элемент в зоне видимости через getBoundingClientRect
 *    - если да → оставляем видимым (visible=true)
 *    - если нет → добавляем класс `reveal--hidden` (visible=false, ready=true)
 *    - подписываемся на IntersectionObserver
 *
 * 3. IntersectionObserver снимает `reveal--hidden`, когда элемент входит в
 *    зону видимости → срабатывает CSS-transition opacity 0.4s.
 *
 * 4. Если JS не выполнился — контент остаётся видимым (т.к. класс --hidden
 *    никогда не добавлялся). Это спасает на очень медленном интернете.
 *
 * 5. prefers-reduced-motion: отключает все transition/animation.
 *
 * Используем useLayoutEffect вместо useEffect, чтобы проверка позиции
 * выполнилась до первого paint — иначе пользователь увидит «вспышку»
 * (контент появился → исчез → IO анимировал). Для SSR useLayoutEffect
 * автоматически заменяется на useEffect (через SuppressLayoutEffectWarning).
 */

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  // ready=false → только класс "reveal" (видим, SSR-фаза).
  // ready=true → IO активен, можно управлять видимостью через visible.
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Проверяем, находится ли элемент уже в зоне видимости
    const rect = node.getBoundingClientRect();
    const inInitialViewport =
      rect.top < (window.innerHeight || document.documentElement.clientHeight);

    if (inInitialViewport) {
      // Элемент уже виден — не скрываем, IO не нужен.
      // (rule отключена глобально в eslint.config.mjs — проверка позиции до paint)
      setVisible(true);
      setReady(true);
      return;
    }

    // Элемент ниже склада — скрываем и ждём IO
    setReady(true);

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-80px 0px", threshold: 0.05 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Tag = as as keyof JSX.IntrinsicElements;

  // Логика классов:
  // - !ready → только "reveal" (видим, SSR-фаза)
  // - ready && visible → "reveal reveal--visible" (видим после анимации)
  // - ready && !visible → "reveal reveal--hidden" (скрыт, ждёт IO)
  const classes = ["reveal"];
  if (ready) {
    classes.push(visible ? "reveal--visible" : "reveal--hidden");
  }
  if (className) classes.push(className);

  return (
    <Tag
      // @ts-expect-error — ref типизация для union ключей тегов
      ref={ref}
      className={classes.filter(Boolean).join(" ")}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
