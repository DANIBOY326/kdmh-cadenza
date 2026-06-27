"use client";

import { motion } from "framer-motion";

const notes = ["♩", "♪", "♫", "♬", "𝄞", "♭"];

interface FloatingNote {
  id: number;
  symbol: string;
  x: string;
  delay: number;
  duration: number;
  size: string;
  opacity: number;
}

const floatingNotes: FloatingNote[] = [
  { id: 1, symbol: "♪", x: "8%",  delay: 0,    duration: 7,  size: "text-2xl", opacity: 0.15 },
  { id: 2, symbol: "♫", x: "18%", delay: 1.5,  duration: 9,  size: "text-lg",  opacity: 0.1  },
  { id: 3, symbol: "♬", x: "32%", delay: 0.8,  duration: 8,  size: "text-3xl", opacity: 0.12 },
  { id: 4, symbol: "♩", x: "55%", delay: 2.2,  duration: 6,  size: "text-xl",  opacity: 0.1  },
  { id: 5, symbol: "𝄞", x: "68%", delay: 0.4,  duration: 10, size: "text-4xl", opacity: 0.14 },
  { id: 6, symbol: "♭", x: "80%", delay: 1.8,  duration: 7,  size: "text-2xl", opacity: 0.1  },
  { id: 7, symbol: "♫", x: "92%", delay: 3.0,  duration: 9,  size: "text-lg",  opacity: 0.12 },
  { id: 8, symbol: "♪", x: "45%", delay: 1.2,  duration: 8,  size: "text-xl",  opacity: 0.08 },
];

export function FloatingNotes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floatingNotes.map((note) => (
        <motion.span
          key={note.id}
          className={`absolute bottom-0 ${note.size} text-gold select-none`}
          style={{ left: note.x, opacity: 0 }}
          animate={{
            y: [0, -600, -1200],
            opacity: [0, note.opacity, 0],
            rotate: [0, 15, -10, 5, 0],
            x: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 2,
          }}
        >
          {note.symbol}
        </motion.span>
      ))}
    </div>
  );
}
