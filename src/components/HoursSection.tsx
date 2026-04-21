import { useEffect, useState } from "react";
import { DAYS_FR, HOURS, getOpenStatus, getParisNow, type OpenStatus as Status } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function HoursSection() {
  const [today, setToday] = useState<number | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => {
      setToday(getParisNow().getDay());
      setStatus(getOpenStatus());
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const order = [1, 2, 3, 4, 5, 6, 0];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            Quand nous visiter
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Horaires <span className="italic text-primary">d'ouverture</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />

          {status && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm" style={{ boxShadow: "var(--shadow-soft)" }}>
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  status.isOpen ? "bg-success animate-pulse" : "bg-destructive",
                )}
                aria-hidden
              />
              <span className="font-semibold text-foreground">{status.label}</span>
              <span className="text-muted-foreground">· {status.detail}</span>
            </div>
          )}
        </div>

        <ul className="divide-y divide-border">
          {order.map((d) => {
            const isToday = today === d;
            return (
              <li
                key={d}
                className={cn(
                  "flex items-center justify-between rounded-lg px-4 py-4 transition-colors sm:px-6",
                  isToday && "bg-primary/5",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-base font-medium sm:text-lg",
                      isToday ? "text-primary" : "text-foreground",
                    )}
                  >
                    {DAYS_FR[d]}
                  </span>
                  {isToday && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      Aujourd'hui
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "tabular-nums text-base sm:text-lg",
                    isToday ? "font-semibold text-primary" : "text-muted-foreground",
                  )}
                >
                  {HOURS[d].open} – {HOURS[d].close}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Heures de Paris · Service continu toute la journée
        </p>
      </div>
    </section>
  );
}