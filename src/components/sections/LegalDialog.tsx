"use client";

import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { legalTexts } from "@/lib/legal";

type LegalKey = keyof typeof legalTexts;

export function LegalDialog({
  legalKey,
  trigger,
}: {
  legalKey: LegalKey;
  trigger: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const doc = legalTexts[legalKey];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {trigger}
      </button>
      <DialogContent className="max-h-[85vh] gap-0 p-0 sm:max-w-2xl">
        <DialogHeader className="border-b border-border/60 px-6 py-5">
          <DialogTitle className="font-serif text-xl text-foreground">
            {doc.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {doc.updated}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="flex flex-col gap-5 px-6 py-6">
            {doc.body.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {section.h ? (
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {section.h}
                  </h3>
                ) : null}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {section.p}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
