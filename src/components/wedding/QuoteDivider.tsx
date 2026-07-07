import { motion } from "framer-motion";

export function QuoteDivider() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-blush/25 to-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-display mt-8 text-2xl italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            “Now we begin the sweetest chapter yet — and we cannot imagine celebrating
            it without you.”
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
