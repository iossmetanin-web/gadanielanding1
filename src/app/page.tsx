import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Requests } from "@/components/sections/Requests";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { CookieBanner } from "@/components/sections/CookieBanner";

export default function Home() {
  return (
    <div className="site-bg relative flex min-h-dvh flex-col overflow-x-hidden">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Перейти к содержимому
      </a>
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Requests />
        <Process />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <CookieBanner />
    </div>
  );
}
