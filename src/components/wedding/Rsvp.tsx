import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Music } from "lucide-react";

const inputClass =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-1 focus:ring-ring";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground";

export function Rsvp() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="rsvp" className="scroll-mt-24 bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Kindly respond by August 1, 2026
          </p>
          <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">RSVP</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            We would be honored to have you with us. Please let us know if you can join
            our celebration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 border border-border bg-card p-8 shadow-soft sm:p-12"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-10 text-center"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blush text-blush-deep">
                  <Heart size={28} fill="currentColor" />
                </div>
                <h3 className="font-display mt-6 text-3xl">Thank you</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your response has been received. We can't wait to celebrate with you.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-7"
              >
                <div>
                  <label htmlFor="rsvp-name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="rsvp-name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <span className={labelClass}>Will you attend?</span>
                  <div className="grid grid-cols-2 gap-3">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setAttending(v)}
                        className={`border px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${
                          attending === v
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background text-muted-foreground hover:border-ring"
                        }`}
                      >
                        {v === "yes" ? "Joyfully accept" : "Regretfully decline"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rsvp-guests" className={labelClass}>
                      Number of Guests
                    </label>
                    <input
                      id="rsvp-guests"
                      type="number"
                      min={1}
                      max={5}
                      defaultValue={1}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="rsvp-diet" className={labelClass}>
                      Dietary Restrictions
                    </label>
                    <input
                      id="rsvp-diet"
                      placeholder="Vegetarian, allergies…"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="rsvp-song" className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <Music size={12} className="text-gold" /> Song Request
                    </span>
                  </label>
                  <input
                    id="rsvp-song"
                    placeholder="A song that will get you dancing"
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-soft"
                >
                  Send RSVP
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
