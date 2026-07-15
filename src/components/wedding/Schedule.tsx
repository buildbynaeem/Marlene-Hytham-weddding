import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect, forwardRef } from "react";
import { useIsMounted } from "@/hooks/use-is-mounted";

const EVENTS = [
  { time: "5:00 PM", event: "Welcome Drinks" },
  { time: "6:30 PM", event: "The Ceremony" },
  { time: "7:15 PM", event: "Cocktail Hour" },
  { time: "8:30 PM", event: "Dinner Served" },
  { time: "10:00 PM", event: "First Dance" },
];

export function Schedule() {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const eventsContainerRef = useRef<HTMLDivElement>(null);
  const firstEventRef = useRef<HTMLDivElement>(null);
  const lastEventRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineBottom, setLineBottom] = useState(0);
  const isMounted = useIsMounted();
  
  const { scrollYProgress } = useScroll({
    target: eventsContainerRef,
    offset: ["start center", "end center"],
  });
  
  // Clamp the flower to stay strictly within the bounds of the line
  const flowerY = useTransform(scrollYProgress, [0, 1], [lineTop - 24, (timelineHeight - lineBottom) - 24], {
    clamp: true,
  });

  useEffect(() => {
    if (!isMounted) return;

    const updatePositions = () => {
      if (timelineContainerRef.current && firstEventRef.current && lastEventRef.current) {
        const containerRect = timelineContainerRef.current.getBoundingClientRect();
        const firstRect = firstEventRef.current.getBoundingClientRect();
        const lastRect = lastEventRef.current.getBoundingClientRect();
        
        // Calculate how far from container top the center of first node is
        const top = firstRect.top - containerRect.top + firstRect.height / 2;
        // Calculate how far from container bottom the center of last node is
        const bottom = containerRect.bottom - lastRect.bottom + lastRect.height / 2;
        
        setLineTop(top);
        setLineBottom(bottom);
        setTimelineHeight(timelineContainerRef.current.clientHeight);
      }
    };
    
    // Initial calculation and resize listener
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [isMounted]);

  return (
    <section
      id="schedule"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#C5A880" }}
        >
          When & Where
        </p>
        <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">
          Schedule of Events
        </h2>
      </motion.div>

      <div 
        className="relative mt-16 overflow-hidden" 
        ref={timelineContainerRef}
      >
        {/* Center line - always centered, spanning middle column */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px"
          style={{ 
            backgroundColor: "#C5A880",
            top: `${lineTop}px`,
            bottom: `${lineBottom}px`,
          }}
        />

        {/* Moving flower icon - always centered, following the line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 pointer-events-none z-50">
          <motion.div
            style={{ y: flowerY }}
            className="relative w-full flex justify-center"
          >
            <img
              src="/flower.png"
              alt="Floral icon"
              className="w-12 h-12 object-contain"
            />
          </motion.div>
        </div>

        {/* Events */}
        <div className="relative space-y-16" ref={eventsContainerRef}>
          {EVENTS.map((item, index) => (
            <EventItem 
              key={index} 
              item={item} 
              index={index} 
              ref={index === 0 ? firstEventRef : index === EVENTS.length - 1 ? lastEventRef : null} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Use forwardRef to pass ref to first/last EventItem
const EventItem = forwardRef<HTMLDivElement, {
  item: { time: string; event: string };
  index: number;
}>(({ item, index }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(localRef, { once: true, margin: "-100px" });

  // Combine the forwarded ref with our local ref
  const setRefs = (element: HTMLDivElement | null) => {
    localRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    } else if (ref != null) {
      ref.current = element;
    }
  };

  return (
    <div
      ref={setRefs}
      className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-8 items-center w-full"
    >
      {/* Left Column: Time */}
      <div className="text-right">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="font-display text-2xl sm:text-3xl"
          style={{ color: "#C5A880" }}
        >
          {item.time}
        </motion.p>
      </div>

      {/* Center Column: Line & Node */}
      <div className="w-8 flex justify-center items-center">
        <div
          className="w-4 h-4 rotate-45 z-10"
          style={{ backgroundColor: "#C5A880" }}
        />
      </div>

      {/* Right Column: Event Name */}
      <div className="text-left">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="font-display text-2xl sm:text-3xl"
          style={{ color: "var(--charcoal)" }}
        >
          {item.event}
        </motion.p>
      </div>
    </div>
  );
});

EventItem.displayName = "EventItem";
