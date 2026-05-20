"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundFX() {
  const { scrollYProgress } = useScroll();
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest * 100);
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900);
    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5 bg-cyan"
        style={{ width: `${progress}%` }}
      />
      <div className="noise" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {Array.from({ length: 34 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan/40"
            initial={{
              x: `${(index * 37) % 100}vw`,
              y: `${(index * 53) % 100}vh`,
              opacity: 0.15
            }}
            animate={{
              y: [`${(index * 53) % 100}vh`, `${((index * 53) % 100) - 18}vh`],
              opacity: [0.1, 0.55, 0.1]
            }}
            transition={{
              duration: 7 + (index % 6),
              repeat: Infinity,
              delay: index * 0.12
            }}
          />
        ))}
      </div>
      {!loaded ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
        >
          <div className="glass scanline w-[min(480px,calc(100vw-40px))] rounded-lg p-8 text-center">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-cyan">
              Initialisation du cockpit analytique
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-violet"
                initial={{ width: "12%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
