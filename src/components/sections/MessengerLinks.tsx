import { messengers, type MessengerKey } from "@/lib/site";
import { messengerIcons } from "@/components/icons/Messengers";
import { cn } from "@/lib/utils";

const order: MessengerKey[] = ["telegram", "whatsapp", "vk", "max"];

export function MessengerLinks({
  className,
  itemClassName,
  showLabel = true,
}: {
  className?: string;
  itemClassName?: string;
  showLabel?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {order.map((key) => {
        const m = messengers[key];
        const Icon = messengerIcons[key];
        return (
          <a
            key={key}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.label}
            title={m.label}
            className={cn(
              "group inline-flex items-center gap-2.5 rounded-xl border border-border bg-card/50 px-3.5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:bg-card",
              itemClassName
            )}
          >
            <Icon className="size-5 shrink-0" />
            {showLabel ? <span>{m.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
