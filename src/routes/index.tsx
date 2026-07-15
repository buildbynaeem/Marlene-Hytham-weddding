import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleTap = () => {
    const video = videoRef.current;
    if (!video || hasStarted) return;
    setHasStarted(true);
    video.play().catch((err) => {
      console.error("Video play failed:", err);
      navigate({ to: "/home" });
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      navigate({ to: "/home" });
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
      onClick={handleTap}
    >
      <video
        ref={videoRef}
        src="/1.webm"
        poster="/envelope-poster.webp"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-center"
          >
            <div className="text-sm opacity-90 uppercase tracking-widest">
              Tap to Open
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
