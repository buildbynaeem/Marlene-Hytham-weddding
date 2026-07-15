import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMounted } from "@/hooks/use-is-mounted";

const TRACK_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // ← swap with your track

const BURGUNDY = "#6B2D31";

/** Delicate Burgundy music note SVG */
function MusicNoteIcon({ playing }: { playing: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {playing ? (
        /* Pause icon when playing */
        <>
          <rect x="6" y="5" width="3.5" height="14" rx="1" fill={BURGUNDY} />
          <rect x="14.5" y="5" width="3.5" height="14" rx="1" fill={BURGUNDY} />
        </>
      ) : (
        /* Music note when paused */
        <>
          <path
            d="M9 18V6.5L21 4V16"
            stroke={BURGUNDY}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="18" r="2.5" stroke={BURGUNDY} strokeWidth="1.5" />
          <circle cx="18.5" cy="16" r="2.5" stroke={BURGUNDY} strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

/** Subtle sound-wave ripple ring shown while playing */
function Ripple() {
  return (
    <span
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        animation: "ripple 1.8s ease-out infinite",
        border: `1.5px solid rgba(107,45,49,0.35)`,
      }}
    />
  );
}

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMounted = useIsMounted();

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      try {
        audio.pause();
        setIsPlaying(false);
      } catch {
        console.warn("Audio pause failed.");
      }
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.warn("Audio playback blocked by browser policy.");
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Ripple keyframe */}
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0;   }
        }
      `}</style>

      <audio ref={audioRef} src={TRACK_URL} loop preload="none" />

      <motion.button
        id="floating-music-btn"
        onClick={toggle}
        onTouchStart={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white"
        style={{
          boxShadow: "0 8px 30px rgb(0,0,0,0.08)",
          outline: "none",
          border: "none",
          cursor: "pointer",
          position: "fixed",   // explicit to avoid Framer overriding
        }}
      >
        {/* Ripple ring while playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.span
              key="ripple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 rounded-full"
            >
              <Ripple />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.span
          animate={isPlaying ? { rotate: [0, 8, -8, 0] } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          className="relative z-10 flex items-center justify-center"
        >
          <MusicNoteIcon playing={isPlaying} />
        </motion.span>
      </motion.button>
    </>
  );
}
