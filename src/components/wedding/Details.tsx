import { motion } from "framer-motion";
import { Church, GlassWater, PartyPopper, Clock, MapPin } from "lucide-react";

const events = [
  {
    icon: Church,
    title: "The Ceremony",
    time: "4:00 PM",
    place: "The Rose Garden, Rosewood Estate",
    note: "Please arrive by 3:30 PM to be seated. Ceremony held outdoors among the roses.",
  },
  {
    icon: GlassWater,
    title: "The Reception",
    time: "6:00 PM",
    place: "The Grand Terrace, Rosewood Estate",
    note: "Cocktails at sunset, followed by dinner under string lights and our first dance.",
  },
  {
    icon: PartyPopper,
    title: "The After-Party",
    time: "10:00 PM",
    place: "The Cellar Lounge",
    note: "Dancing until late, midnight snacks, and a champagne toast to send us off.",
  },
];

export function Details() {
  return (
    <section id="details" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Saturday · September 12, 2026
          </p>
          <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">The Details</h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group flex flex-col items-center border border-border bg-card px-8 py-12 text-center shadow-card transition-shadow duration-500 hover:shadow-soft"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold-soft bg-background text-gold transition-transform duration-500 group-hover:scale-110">
                <e.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-display mt-6 text-2xl">{e.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} className="shrink-0 text-gold" />
                <span className="tracking-widest">{e.time}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="shrink-0 text-gold" />
                <span>{e.place}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
