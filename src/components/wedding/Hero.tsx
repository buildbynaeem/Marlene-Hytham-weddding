import { motion } from "framer-motion";
import { useMemo } from "react";
import hero from "@/assets/hero.jpg";
import { COUPLE, WEDDING_DATE_LABEL, WEDDING_LOCATION } from "@/lib/wedding";

function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 7.3 + 4) % 100}%`,
        size: 8 + ((i * 13) % 10),
        delay: (i * 1.7) % 12,
        duration: 14 + ((i * 5) % 10),
        drift: i % 2 === 0 ? 40 : -40,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-blush/70"
          style={{
            left: p.left,
            top: -20,
            width: p.size,
            height: p.size * 0.8,
            borderRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.drift, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.9, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt={`${COUPLE.partner1} and ${COUPLE.partner2} in a garden at golden hour`}
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <Petals />

      <div className="relative z-10 px-6 pb-24 pt-32 text-center text-primary-foreground">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs font-medium uppercase tracking-[0.5em] sm:text-sm"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display mt-6 text-5xl leading-tight sm:text-7xl md:text-8xl"
        >
          {COUPLE.partner1}
          <span className="mx-3 italic text-gold-soft sm:mx-5">&</span>
          {COUPLE.partner2}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mx-auto mt-8 flex max-w-md flex-col items-center gap-2"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-soft to-transparent" />
          <p className="font-display mt-3 text-lg italic tracking-wide sm:text-2xl">
            {WEDDING_DATE_LABEL}
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80 sm:text-sm">
            {WEDDING_LOCATION}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10"
        >
          <a
            href="#rsvp"
            className="inline-block border border-gold-soft/70 bg-background/10 px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-background hover:text-foreground hover:shadow-soft"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70"
        aria-hidden
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-primary-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
}
