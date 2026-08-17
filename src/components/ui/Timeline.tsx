"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionConfig } from "@/hooks/useMotionConfig";

export function TimelineThread() {
  const { shouldReduceMotion } = useMotionConfig();

  return (
    <div className="absolute left-[15px] sm:left-[23px] top-0 bottom-0 w-1 bg-gradient-to-b from-saffron via-white to-green rounded-full overflow-hidden origin-top">
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-navy origin-top"
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

interface TimelineNodeProps {
  year: string;
  title: string;
  description: string;
  term?: string;
  index: number;
}

export function TimelineNode({ year, title, description, term, index }: TimelineNodeProps) {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <motion.div
      className="relative pl-12 sm:pl-16 py-8"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ...transition, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-10 w-8 h-8 rounded-full border-4 border-navy bg-paper shadow-[0_0_0_2px_var(--color-gold)] flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-navy" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-saffron text-sm md:text-base font-bold tracking-wider">
            {year}
          </span>
          {term && (
            <span className="px-3 py-1 rounded-full bg-navy text-paper text-xs font-bold uppercase tracking-widest">
              {term}
            </span>
          )}
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-navy">{title}</h3>
        <p className="text-ink/80 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}
