import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { faqs, testimonials } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ekaterina-taro.ru"),
  title: "Таролог онлайн Екатерина · Запись на консультацию",
  description:
    "Расклады Таро онлайн: отношения, карьера, жизненный выбор. Мягкий разбор ситуации со стороны, конфиденциально. Запишитесь на консультацию.",
  keywords: [
    "таролог онлайн",
    "расклад таро",
    "консультация таролога",
    "разбор ситуации",
    "таро отношения",
    "таро онлайн",
    "запись к тарологу",
  ],
  authors: [{ name: "Екатерина" }],
  alternates: { canonical: "https://ekaterina-taro.ru" },
  openGraph: {
    title: "Екатерина — таро-консультации онлайн",
    description:
      "Мягкий разбор отношений, карьеры и жизненного выбора. Конфиденциально, онлайн, опыт более 8 лет.",
    type: "website",
    locale: "ru_RU",
    siteName: "Екатерина · Таро-консультации",
    url: "https://ekaterina-taro.ru",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Екатерина — таро-консультации онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Екатерина — таро-консультации онлайн",
    description:
      "Разбор отношений, карьеры, жизненного выбора. Конфиденциально и этично.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  category: "consulting",
};

export const viewport: Viewport = {
  themeColor: "#111116",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Екатерина · Таро-консультации",
  description:
    "Онлайн-консультации с использованием системы метафорических карт Таро. Разбор отношений, карьеры, предназначения, ситуаций выбора.",
  url: "https://ekaterina-taro.ru",
  image: "https://ekaterina-taro.ru/og.jpg",
  areaServed: "Россия, дистанционно онлайн",
  knowsAbout: ["Таро", "Рефлексия", "Разбор жизненных ситуаций"],
  email: "hello@ekaterina-taro.ru",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <Toaster richColors theme="dark" position="top-center" />
      </body>
    </html>
  );
}
