import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Кастомные иконки запросов с символикой Таро.
 * Минималистичные контурные глифы в стиле Старших Арканов,
 * без иллюстраций — только золотые линии на тёмном фоне.
 */

// Отношения — две переплетённые фигуры / чаша (Аркана «Влюблённые» / «Кубки»)
export function RelationsGlyph(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="9" r="3.2" />
      <circle cx="21" cy="9" r="3.2" />
      <path d="M6 27c0-3.3 2.2-6 5-6s5 2.7 5 6" />
      <path d="M16 27c0-3.3 2.2-6 5-6s5 2.7 5 6" />
      <path d="M16 14v3" opacity="0.6" />
    </svg>
  );
}

// Финансы и карьера — монета с пентаклем (Аркана «Монеты»)
export function CareerGlyph(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9.5l1.9 3.9 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6L16 9.5Z" />
    </svg>
  );
}

// Предназначение — солнце с лучами (Аркана «Солнце»)
export function PurposeGlyph(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="5.5" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.1 2.1M22.4 22.4l2.1 2.1M24.5 7.5l-2.1 2.1M9.6 22.4l-2.1 2.1" />
    </svg>
  );
}

// Ситуация выбора — развилка / перекрёсток (Аркана «Колесо» / «Развилка»)
export function ChoiceGlyph(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 27V14" />
      <path d="M16 14L8 7" />
      <path d="M16 14L24 7" />
      <circle cx="16" cy="14" r="2.2" />
      <path d="M6 27h20" opacity="0.5" />
    </svg>
  );
}

export const requestGlyphs = {
  relations: RelationsGlyph,
  career: CareerGlyph,
  purpose: PurposeGlyph,
  choice: ChoiceGlyph,
} as const;
