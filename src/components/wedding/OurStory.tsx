import { motion } from "framer-motion";
import story from "@/assets/story.jpg";
import { COUPLE } from "@/lib/wedding";

export function OurStory() {
  return (
    <section id="story" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 border border-gold-soft/50" aria-hidden />
          <img
            src={story}
            alt={`${COUPLE.partner1} and ${COUPLE.partner2} laughing at a café`}
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover shadow-soft"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            How it began
          </p>
          <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">Our Story</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
            <p>
              It started with a spilled cappuccino at a tiny café on a rainy Tuesday in
              October. {COUPLE.partner1} was reading; {COUPLE.partner2} was late for a
              meeting he never made it to. One apology turned into three hours of
              conversation — and neither of us has stopped talking since.
            </p>
            <p>
              Seven years, four apartments, two cities, and one very spoiled golden
              retriever later, {COUPLE.partner2} proposed at the same café table where it
              all began — cappuccino intentionally spilled.
            </p>
            <p className="font-display text-lg italic text-foreground">
              “Now we begin the sweetest chapter yet — and we cannot imagine celebrating
              it without you.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
