"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionConfig } from "@/hooks/useMotionConfig";

interface CardProps {
  category: string;
  headline: string;
  description: string;
  stat?: string;
  index: number;
}

export function AchievementCard({ category, headline, description, stat, index }: CardProps) {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <motion.div
      layout
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      transition={{ ...transition, delay: index * 0.05 }}
      className="bg-white border border-gold/20 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between group"
    >
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-saffron/10 text-saffron font-mono text-xs font-bold uppercase tracking-wider mb-4">
          {category}
        </span>
        <h4 className="font-serif text-xl md:text-2xl text-navy mb-3 group-hover:text-saffron transition-colors">
          {headline}
        </h4>
        <p className="text-ink/80 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      {stat && (
        <div className="mt-8 pt-6 border-t border-navy/5">
          <span className="font-serif text-4xl md:text-5xl text-navy font-medium tracking-tight">
            {stat}
          </span>
        </div>
      )}
    </motion.div>
  );
}
