"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let raf = 0;

    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={siteConfig.brand}
        >
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-gold/40 transition-colors group-hover:border-gold/70">
            <Image
              src="/master/master-logo.jpg"
              alt={siteConfig.masterName}
              fill
              sizes="36px"
              priority
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

        <nav className="hidden items-center gap-7 md:flex">
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

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Открыть меню"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[78%] sm:max-w-sm">
              <div className="flex h-full flex-col gap-2 p-6">
                <span className="font-serif text-lg font-semibold">
                  {siteConfig.masterName}
                </span>
                <span className="mb-4 text-[11px] uppercase tracking-[0.18em] text-gold/80">
                  Таро-консультации
                </span>
                <nav className="flex flex-col gap-1">
                  {siteConfig.nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
