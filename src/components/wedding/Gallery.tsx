import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Gold wedding rings on silk with rose petals", w: 900, h: 1200 },
  { src: g2, alt: "Couple dancing under string lights at dusk", w: 1200, h: 900 },
  { src: g3, alt: "Bridal bouquet of peonies and blush roses", w: 900, h: 1100 },
  { src: g4, alt: "Couple walking through a golden field at sunset", w: 1200, h: 900 },
  { src: g5, alt: "Outdoor ceremony arch with white and blush flowers", w: 900, h: 1200 },
  { src: g6, alt: "Hands intertwined with an engagement ring", w: 1200, h: 800 },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Moments we treasure
        </p>
        <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">Gallery</h2>
      </motion.div>

      <div className="mt-16 columns-2 gap-4 sm:gap-6 lg:columns-3 [&>figure]:mb-4 sm:[&>figure]:mb-6">
        {photos.map((p, i) => (
          <motion.figure
            key={p.alt}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
            className="group overflow-hidden shadow-card"
          >
            <img
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              loading="lazy"
              className="w-full transform-gpu object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
