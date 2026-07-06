import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { COUPLE, WEDDING_DATE, WEDDING_DATE_LABEL } from "@/lib/wedding";

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Footer() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <footer className="border-t border-border bg-background py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Counting down to forever
        </p>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <span className="font-display text-3xl tabular-nums sm:text-5xl">
                {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="font-display mt-10 text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">
          “Whatever our souls are made of, yours and mine are the same.”
        </p>

        <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
          With all our love, {COUPLE.partner1} & {COUPLE.partner2}
          <Heart size={14} className="text-blush-deep" fill="currentColor" />
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          {WEDDING_DATE_LABEL}
        </p>
      </div>
    </footer>
  );
}
