import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus as Status } from "@/lib/hours";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "badge" | "inline";
}

export function OpenStatus({ className, variant = "badge" }: Props) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  if (variant === "inline") {
    return (
      <span className={cn("inline-flex items-center gap-2 text-sm", className)}>
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            status.isOpen ? "bg-success animate-pulse" : "bg-destructive",
          )}
          aria-hidden
        />
        <span className="font-medium">{status.label}</span>
        <span className="text-muted-foreground">· {status.detail}</span>
      </span>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur",
        status.isOpen
          ? "border-success/30 bg-success/10 text-success"
          : "border-destructive/30 bg-destructive/10 text-destructive",
        className,
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          status.isOpen ? "bg-success animate-pulse" : "bg-destructive",
        )}
        aria-hidden
      />
      {status.label}
      <span className="text-foreground/70 font-normal">· {status.detail}</span>
    </div>
  );
}