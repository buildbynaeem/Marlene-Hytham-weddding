import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const VENUE_NAME    = "Rosewood Estate";
const VENUE_ADDRESS = "1234 Vineyard Lane, Napa Valley, CA 94558";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.680!2d-122.2697!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085273ed7fcf2b3%3A0x5810bb05c7b0e52e!2sNapa%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";
const MAPS_LINK_URL =
  "https://www.google.com/maps/search/Rosewood+Estate+Napa+Valley+California";

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#C5A880" }}
          >
            Getting There
          </p>
          <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">
            Venue Map
          </h2>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-14 w-full max-w-3xl"
        >
          <div
            className="overflow-hidden rounded-lg border border-neutral-200 shadow-md"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              title="Venue Map"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Address + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-5 text-center"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={15} strokeWidth={1.5} style={{ color: "#C5A880" }} />
              <span className="font-sans text-base font-semibold text-foreground">
                {VENUE_NAME}
              </span>
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              {VENUE_ADDRESS}
            </p>
          </div>

          <a
            href={MAPS_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300"
            style={{
              borderColor: "#C5A880",
              color: "#C5A880",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C5A880";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C5A880";
            }}
          >
            Open in Google Maps
            <ExternalLink size={13} strokeWidth={1.8} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
