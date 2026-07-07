import { useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * FloatingAudioPlayer — frosted glass, champagne-gold finish.
 * Replace TRACK_URL with your own wedding song.
 */
const TRACK_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // ← swap with your track

const GOLD = "#C5A880";

/** Thin-stroke modern music note SVG */
function MusicIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18V5.5L21 3.5V16"
        stroke={GOLD}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6"  cy="18" r="2.5" stroke={GOLD} strokeWidth="1.4" />
      <circle cx="18" cy="16" r="2.5" stroke={GOLD} strokeWidth="1.4" />
    </svg>
  );
}

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const controls = useAnimationControls();

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      controls.stop();
      setPlaying(false);
    } else {
      await audio.play();
      controls.start({
        rotate: 360,
        transition: {
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK_URL} loop preload="none" />

      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
        aria-label={playing ? "Pause background music" : "Play background music"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 50,
          width: "3.1rem",
          height: "3.1rem",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <motion.span
          animate={controls}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "center",
          }}
        >
          <MusicIcon />
        </motion.span>
      </motion.button>
    </>
  );
}
