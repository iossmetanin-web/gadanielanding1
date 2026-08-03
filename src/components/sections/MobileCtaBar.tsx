"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const nearBottom = y + vh > docH - 160;
      setVisible(y > vh * 0.6 && !nearBottom);
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
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      } transition-all duration-300`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-border/60 bg-background/95">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex flex-col leading-none">
            <span className="text-[11px] text-muted-foreground">
              Запись на расклад
            </span>
            <span className="text-sm font-medium text-foreground">
              Конфиденциально · онлайн
            </span>
          </div>
          <Button asChild className="ml-auto h-11 flex-1 max-w-[60%] gap-2 text-base sm:max-w-[220px]">
            <a href="#contact">
              Записаться
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
